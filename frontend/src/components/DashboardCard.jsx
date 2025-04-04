import { Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";

const DashboardCard = ({ title, value, icon, color = "#58a6ff" }) => (
  <Card
    sx={{
      background: "rgba(22, 27, 34, 0.85)", // Glassmorphism effect
      backdropFilter: "blur(10px)", // Frosted glass effect
      WebkitBackdropFilter: "blur(10px)",
      border: "1px solid rgba(88, 166, 255, 0.3)", // Soft border
      borderRadius: "16px",
      color: "#c9d1d9",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      overflow: "hidden",
      position: "relative",
      padding: "20px",
      "&:hover": {
        transform: "translateY(-8px) scale(1.05)",
        boxShadow: `0px 0px 20px ${color}`,
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: "-20%",
        left: "-20%",
        width: "150%",
        height: "150%",
        background: `radial-gradient(circle, ${color}22 10%, transparent 60%)`,
        zIndex: 0,
        transition: "opacity 0.3s ease",
      },
      "&:hover::before": {
        opacity: 1,
      },
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          fontSize: 52,
          color,
          textShadow: `0px 0px 15px ${color}AA`,
          transition: "0.3s ease-in-out",
        }}
      >
        {icon}
      </Box>
      <Typography variant="h3" fontWeight="bold" sx={{ color: "#58a6ff", textShadow: "0px 0px 12px #58a6ffAA" }}>
        {value}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#8b949e", textShadow: "0px 0px 8px rgba(255,255,255,0.2)" }}>
        {title}
      </Typography>
    </CardContent>
  </Card>
);

export default DashboardCard;
