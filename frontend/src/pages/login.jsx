import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, token, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate(user?.role === "admin" ? "/admin-login" : "/dashboard");
      }
    });
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
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          backgroundColor: "#161b22",
          border: "1px solid #30363d",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#58a6ff", mb: 2 }}>
          Welcome Back
        </Typography>
        <Typography variant="body1" sx={{ color: "#8b949e", mb: 3 }}>
          Log in to continue managing the library.
        </Typography>

        {error && (
          <Typography variant="body2" sx={{ color: "red", mb: 2 }}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#30363d" },
                "&:hover fieldset": { borderColor: "#58a6ff" },
                "&.Mui-focused fieldset": { borderColor: "#58a6ff" },
              },
              input: { color: "#c9d1d9" },
              label: { color: "#8b949e" },
            }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#30363d" },
                "&:hover fieldset": { borderColor: "#58a6ff" },
                "&.Mui-focused fieldset": { borderColor: "#58a6ff" },
              },
              input: { color: "#c9d1d9" },
              label: { color: "#8b949e" },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#238636",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#2ea043" },
            }}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>
        </form>

        <Typography variant="body2" sx={{ mt: 3, color: "#8b949e" }}>
          New user?{" "}
          <Link to="/signup" style={{ color: "#58a6ff", textDecoration: "none" }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
