import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        backgroundColor: "#161b22",
        color: "#c9d1d9",
        py: 3,
        mt: "auto",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0px -4px 12px rgba(88, 166, 255, 0.2)", // Soft top glow
        "&::before": {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: 0,
          width: "50%",
          height: "2px",
          background: "linear-gradient(to right, #58a6ff, transparent)",
          transform: "translateX(-50%)",
          animation: "glow-animation 2s infinite alternate ease-in-out",
        },
        "@keyframes glow-animation": {
          "0%": { width: "50%" },
          "100%": { width: "80%" },
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#58a6ff",
          textShadow: "0px 0px 10px #58a6ffAA",
        }}
      >
        Library Management System
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          color: "#8b949e",
          textShadow: "0px 0px 8px rgba(255, 255, 255, 0.1)",
        }}
      >
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Link
          href="#"
          sx={{
            color: "#58a6ff",
            textDecoration: "none",
            mx: 1,
            fontWeight: "bold",
            transition: "0.3s",
            "&:hover": {
              textShadow: "0px 0px 8px #58a6ff",
              textDecoration: "underline",
            },
          }}
        >
          Privacy Policy
        </Link>
        |
        <Link
          href="#"
          sx={{
            color: "#58a6ff",
            textDecoration: "none",
            mx: 1,
            fontWeight: "bold",
            transition: "0.3s",
            "&:hover": {
              textShadow: "0px 0px 8px #58a6ff",
              textDecoration: "underline",
            },
          }}
        >
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
