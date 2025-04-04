# 📚 Library Management System  

A **sexy**, modern, and fully responsive **Library Management System** built with **React, Tailwind CSS, Node.js, Express, and MongoDB**.  

🔥 **Features an optimized UI** with **neon buttons, animations, and dark GitHub-themed styling.**  

## 🚀 Tech Stack  

### **Frontend**  
- **React.js + Vite** (for blazing-fast UI)  
- **Tailwind CSS** (sexy styling)  
- **Framer Motion** (smooth animations)  
- **React Router** (page navigation)  
- **Axios** (API requests)  
- **Lottie Animations** (stunning effects)  
- **React Toastify** (notifications)  

### **Backend**  
- **Node.js + Express.js** (server & API handling)  
- **MongoDB + Mongoose** (database for books & users)  
- **JWT Authentication** (secure login & signup)  
- **Bcrypt.js** (password hashing)  

---

## ✨ **Features**
### **Frontend**
✅ **Sexy dark-themed UI (GitHub-inspired)**  
✅ **Neon-styled buttons & hover effects**  
✅ **Fully responsive (mobile-friendly)**  
✅ **Dashboard with live statistics**  
✅ **Smooth animations (Framer Motion)**  
✅ **Optimized code structure**  
✅ **Lottie animations on the signup page**  
✅ **Toast notifications for success/error**  

### **Backend**
✅ **JWT-based authentication**  
✅ **User roles (Admin & User)**  
✅ **CRUD operations for books, users, and categories**  
✅ **Secure password hashing with bcrypt**  
✅ **Efficient MongoDB queries**  

---

## 📂 **Project Structure**
```
library-management/
│── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components (Navbar, Cards, Buttons)
│   │   ├── pages/            # Pages (Dashboard, Login, Signup)
│   │   ├── assets/           # Images & icons
│   │   ├── styles/           # Global CSS
│   │   ├── App.jsx           # Main App component
│   │   ├── main.jsx          # Entry point
│   ├── public/               # Static files
│   ├── package.json          # Frontend dependencies
│── backend/
│   ├── controllers/          # API logic for books & users
│   ├── models/               # Mongoose database models
│   ├── routes/               # API routes
│   ├── config/               # Database & environment config
│   ├── server.js             # Main backend file
│   ├── package.json          # Backend dependencies
│── README.md                 # Project documentation
```

---

## 🛠️ **Setup Instructions**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/library-management.git
cd library-management
```

### **2️⃣ Setup Backend**
```sh
cd backend
npm install
npm start  # Runs the backend on PORT 5000
```

### **3️⃣ Setup Frontend**
```sh
cd frontend
npm install
npm run dev  # Runs the frontend on localhost:5173
```

---

## 🔗 **API Endpoints**
| Method | Endpoint          | Description                |
|--------|------------------|----------------------------|
| POST   | `/api/auth/signup` | Register a new user       |
| POST   | `/api/auth/login`  | User login (JWT)         |
| GET    | `/api/books`       | Fetch all books          |
| POST   | `/api/books`       | Add a new book (Admin)   |
| PUT    | `/api/books/:id`   | Update book details      |
| DELETE | `/api/books/:id`   | Remove a book (Admin)    |

---

## 🎨 **UI Overview**
### **🏠 Homepage**
- Split **Hero Section** (Left: Image | Right: Text)  
- **"Get Started"** button with **neon glow effect**  
- Animated **Lottie integration**  

### **📊 Dashboard**
- **6 cards** (2 rows × 3 columns)  
- **Glassmorphism card styling**  
- **Smooth hover effects & animations**  

### **📝 Forms (Signup & Login)** 
- **Toast notifications** for success/error  
- **Dark theme with neon input fields**  

### **🛑 Footer**
- **Styled GitHub-like footer**  
- **Perfectly aligned with no black gaps**  

---

## 💡 **Future Improvements**
✅ **Admin Panel for Book Management**  
✅ **Search & Filtering System**  
✅ **User Profiles & Borrow History**  

---

## 🤝 **Contributing**
Pull requests are welcome! Feel free to **fork** this repo and submit **new features** or **bug fixes**.  

---

## 📜 **License**
This project is **open-source** under the MIT License.  

🚀 **Enjoy using this sexy Library Management System!**  

