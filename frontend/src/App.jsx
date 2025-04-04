import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import AdminKey from "./components/AdminLogin";
import Footer from "./components/Footer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Track sidebar state

  return (
    <Box sx={{ display: "flex", width: "100vw", minHeight: "100vh", backgroundColor: "#0d1117", color: "#c9d1d9" }}>
      
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          pl: sidebarOpen ? "240px" : "80px", // Use padding instead of margin
          transition: "padding 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Navbar />

        {/* Routes */}
        <Box sx={{ flexGrow: 1, px: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-login" element={<AdminKey />} />
          </Routes>
        </Box>

        {/* Footer - Full Width */}
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
