import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Admin from "../models/Admin.js";
import nodemailer from "nodemailer"

const generateRandomCredentials = () => {
  const username = `user${Math.floor(10000 + Math.random() * 90000)}`;
  const password = crypto.randomBytes(5).toString("hex"); // 10 characters
  return { username, password };
};

// Signup Route
const registerUser = async (req, res) => {
  console.log(req.body);
  
  const { fullname, surname, feesReceiptNo, email} = req.body;

  if (!req.file) {
    return res.status(400).json({ msg: "ID Card image is not uploaded, please try again" });
  }

  try {
    let user = await User.findOne({ feesReceiptNo, isVerified: true });
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({
      fullname,
      surname,
      feesReceiptNo,
      idCardImage: req.file.path,
      email
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, isVerified: user.isVerified });
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ error: err.message });
  }
};

// Login Route
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (admin) {
      return res.json({ role: "admin" });
    } else {
      const user = await User.findOne({ email, isVerified: true });
      if (!user) return res.status(400).json({ msg: "User not found" });

      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.json({ token, isVerified: user.isVerified });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin Login
const adminLogin = async (req, res, admin) => {
  const { orgKey, password } = req.body;

  try {
    if (!orgKey) {
      return res.status(400).json({ message: "Please provide an admin key" });
    }

    // Get valid admin keys from .env
    const validAdminKeys = process.env.ADMIN_SECRET_KEY.split(",");

    if (!validAdminKeys.includes(orgKey)) {
      return res.status(403).json({ message: "Invalid admin key" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, role: "admin" });
  } catch (error) {
    console.error("Error in admin login", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const verifySignedUpUsers = async (req, res) => {
  console.log(req);
  
  const {feesReceiptNo, email } = req.body;
  console.log(email);
  
  console.log(feesReceiptNo);
  

  try {
    // Check if user exists
    const user = await User.findOne({ feesReceiptNo });
    console.log(user);
    
    if (!user) return res.status(400).json({ message: "User does not exist" });

    // Generate random username and password
    const { username, password } = generateRandomCredentials();

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user in the database
    user.username = username;
    user.password = hashedPassword;
    user.isVerified = true;
    await user.save();

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your generated app password
      },
    });

    // Email content with login credentials
    const mailOptions = {
      from: '"Your App Name" <your-email@gmail.com>',
      to: email,
      subject: "Your Account Details",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; text-align: center; padding: 20px;">
          <h1 style="color: #4CAF50;">Welcome to Our Platform 🎉</h1>
          <p>Your account has been successfully verified. Below are your login details:</p>
          <p><strong>Username:</strong> ${username}</p>
          <p><strong>Password:</strong> ${password}</p>
          <p>Click the button below to log in:</p>
          <a href="" 
            style="display: inline-block; padding: 10px 20px; margin-top: 10px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">
            Login Now
          </a>
          <p style="margin-top: 20px; font-size: 12px; color: gray;">For security reasons, please change your password after logging in.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "User verified and credentials sent via email" });

  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { registerUser, login, generateRandomCredentials, verifySignedUpUsers, adminLogin };
