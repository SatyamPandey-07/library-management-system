import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Fade,
  Divider,
} from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    surname: "",
    feesReceiptNo: "",
    email: "",
    idCardImage: null,
  });

  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idCardImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    setError("");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const response = await axios.post(
        "http://localhost:4300/api/v1/users/register",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.token) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.response?.data?.msg || "Signup failed, try again!");
    }

    setSubmit(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d1117",
        color: "#c9d1d9",
        px: 2,
      }}
    >
      <Fade in>
        <Paper
          elevation={8}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 450,
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0px 0px 20px rgba(88, 166, 255, 0.15)",
          }}
        >
          {/* 🔥 Fixed Heading Visibility */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#58a6ff",
              textShadow: "0px 0px 10px rgba(88, 166, 255, 0.8)",
              mb: 3,
              paddingTop: "16px", // 👈 Ensures visibility
            }}
          >
            Create an Account
          </Typography>

          <Typography variant="body1" sx={{ color: "#8b949e", mb: 3 }}>
            Join the library and explore a world of knowledge.
          </Typography>

          {error && (
            <Typography variant="body2" sx={{ color: "#f44336", mb: 2 }}>
              {error}
            </Typography>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="fullname"
              variant="outlined"
              fullWidth
              value={formData.fullname}
              onChange={handleChange}
              required
              sx={inputStyles}
            />

            <TextField
              label="Surname"
              name="surname"
              variant="outlined"
              fullWidth
              value={formData.surname}
              onChange={handleChange}
              required
              sx={inputStyles}
            />

            <TextField
              label="Fees Receipt No"
              name="feesReceiptNo"
              variant="outlined"
              fullWidth
              value={formData.feesReceiptNo}
              onChange={handleChange}
              required
              sx={inputStyles}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
              sx={inputStyles}
            />

            {/* Upload */}
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                mt: 2,
                color: "#58a6ff",
                borderColor: "#30363d",
                "&:hover": {
                  backgroundColor: "#21262d",
                  borderColor: "#58a6ff",
                  boxShadow: "0 0 8px #58a6ff",
                },
              }}
            >
              Upload ID Card
              <input type="file" hidden onChange={handleFileChange} />
            </Button>

            {/* Preview File Name */}
            {formData.idCardImage && (
              <Typography
                variant="caption"
                sx={{ mt: 1, display: "block", color: "#8b949e", textAlign: "left" }}
              >
                Selected: {formData.idCardImage.name}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#238636",
                fontWeight: "bold",
                transition: "0.3s ease",
                "&:hover": {
                  backgroundColor: "#2ea043",
                  boxShadow: "0px 0px 12px #2ea043",
                },
              }}
              disabled={submit}
            >
              {submit ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>

          <Divider sx={{ my: 3, borderColor: "#30363d" }} />

          <Typography variant="body2" sx={{ color: "#8b949e" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#58a6ff", textDecoration: "none" }}>
              Log In
            </Link>
          </Typography>
        </Paper>
      </Fade>
    </Box>
  );
};

// 🔥 Input Styling with Better Contrast
const inputStyles = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#30363d" },
    "&:hover fieldset": { borderColor: "#58a6ff" },
    "&.Mui-focused fieldset": { borderColor: "#58a6ff", boxShadow: "0 0 8px #58a6ff55" },
  },
  input: { color: "#c9d1d9" },
  label: { color: "#8b949e" },
};

export default Signup;
