import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { Box, Typography, Button, Card } from "@mui/material";
import { Book, People, Category, History } from "@mui/icons-material";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero_lib.png";
import { motion } from "framer-motion"; // Add animations

const Dashboard = () => {
  const stats = [
    { title: "Books Listed", value: 2, icon: <Book />, color: "#58a6ff" },
    { title: "Times Book Issued", value: 6, icon: <History />, color: "#f78166" },
    { title: "Times Books Returned", value: 3, icon: <History />, color: "#ffa657" },
    { title: "Registered Users", value: 6, icon: <People />, color: "#a5d6ff" },
    { title: "Authors Listed", value: 2, icon: <People />, color: "#2ea043" },
    { title: "Listed Categories", value: 6, icon: <Category />, color: "#d2a8ff" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0d1117",
        minHeight: "100vh",
        color: "#c9d1d9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      {/* Main Content Wrapper */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", px: 3, py: 3 }}>
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              py: 4,
            }}
          >
            {/* Image */}
            <Box sx={{ flex: 1, textAlign: "center", mb: { xs: 4, md: 0 } }}>
              <motion.img
                src={heroImage}
                alt="Library Management"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  objectFit: "cover",
                  display: "block",
                  margin: "auto",
                }}
              />
            </Box>

            {/* Text Section */}
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, px: { xs: 2, md: 6 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#58a6ff",
                  textShadow: "0px 0px 12px rgba(88, 166, 255, 0.8)",
                }}
              >
                Library Management System
              </Typography>
              <Typography variant="h6" sx={{ mt: 2, color: "#8b949e" }}>
                Streamline book borrowing, tracking, and management effortlessly with our advanced system.
              </Typography>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                sx={{
                  mt: 4,
                  background: "linear-gradient(45deg, #238636, #2ea043)",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  transition: "0.3s",
                  borderRadius: "12px",
                  boxShadow: "0px 0px 20px rgba(46, 160, 67, 0.5)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 30px #2ea043",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </motion.div>

        {/* Stats Cards Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            px: 2,
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  flex: "1 1 30%",
                  minWidth: "250px",
                  background: "rgba(22, 27, 34, 0.8)", // Glassmorphism Effect
                  color: "#c9d1d9",
                  p: 3,
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: "0px 0px 10px rgba(88, 166, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 20px rgba(88, 166, 255, 0.5)",
                  },
                }}
              >
                <DashboardCard {...item} />
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
