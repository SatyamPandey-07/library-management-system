import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Search, Favorite, FavoriteBorder } from "@mui/icons-material";
import axios from "axios";
import { addFavoriteBook, removeFavoriteBook } from "../redux/slices/favoritesSlice";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const favoriteBooks = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  // Fetch books from Google Books API
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`
      );

      if (response.data.items) {
        const books = response.data.items.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || ["Unknown"],
          thumbnail:
            item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/50x75",
        }));

        setSearchResults(books);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Toggle favorite book
  const handleToggleFavorite = (book) => {
    const isFavorite = favoriteBooks.some((fav) => fav.id === book.id);
    if (isFavorite) {
      dispatch(removeFavoriteBook(book.id));
    } else {
      dispatch(addFavoriteBook(book));
    }
  };

  return (
    <AppBar
  position="fixed"
  sx={{
    backgroundColor: "#161b22",
    borderBottom: "1px solid #30363d",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(8px)",
  }}
>

      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Logo + Title */}
        <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    paddingLeft: "60px", // Ensures logo is visible
    position: "relative",
    zIndex: 10, // Keeps it above sidebar
  }}
>
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              height: 45,
              width: 90,
              marginRight: 12,
              filter: "drop-shadow(0px 0px 5px #58a6ff)",
              
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#58a6ff",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              textShadow: "0px 0px 8px rgba(88, 166, 255, 0.7)",
            }}
          >
            Library Management
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, mx: 3, position: "relative" }}>
          <TextField
            placeholder="Search Books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            sx={{
              backgroundColor: "#21262d",
              borderRadius: "8px",
              input: { color: "#c9d1d9" },
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#58a6ff" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch} sx={{ color: "#58a6ff" }}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Search Results Dropdown */}
          {searchResults.length > 0 && (
            <Box
              sx={{
                backgroundColor: "#161b22",
                padding: 2,
                borderRadius: "8px",
                position: "absolute",
                top: "50px",
                left: 0,
                width: "100%",
                maxHeight: "300px",
                overflowY: "auto",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                zIndex: 1000,
              }}
            >
              {searchResults.map((book) => (
                <Box
                  key={book.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 1,
                    borderBottom: "1px solid #30363d",
                    "&:hover": { backgroundColor: "#21262d" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={book.thumbnail}
                      alt={book.title}
                      style={{ width: 50, height: 75, borderRadius: "4px", marginRight: 10 }}
                    />
                    <Typography sx={{ color: "#c9d1d9" }}>{book.title}</Typography>
                  </Box>
                  <IconButton
                    onClick={() => handleToggleFavorite(book)}
                    sx={{ color: favoriteBooks.some((fav) => fav.id === book.id) ? "#ffcc00" : "#8b949e" }}
                  >
                    {favoriteBooks.some((fav) => fav.id === book.id) ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Navbar Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Home", "Dashboard"].map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={`/${item.toLowerCase()}`}
              sx={{
                color: "#c9d1d9",
                fontWeight: 500,
                "&:hover": { color: "#58a6ff", textShadow: "0px 0px 12px #58a6ff" },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Auth Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            sx={{
              borderColor: "#8b949e",
              color: "#8b949e",
              transition: "0.3s",
              "&:hover": { borderColor: "#58a6ff", color: "#58a6ff", boxShadow: "0px 0px 12px #58a6ff" },
            }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            sx={{
              backgroundColor: "#238636",
              transition: "0.3s",
              "&:hover": { backgroundColor: "#2ea043", boxShadow: "0px 0px 12px #2ea043" },
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              transition: "0.3s",
              "&:hover": { boxShadow: "0px 0px 12px red" },
            }}
          >
            LOG OUT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
