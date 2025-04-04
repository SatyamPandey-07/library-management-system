import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { Home, MenuBook, Logout, Menu, Favorite, Delete } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFavoriteBook } from "../redux/slices/favoritesSlice";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const favoriteBooks = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const toggleDrawer = () => setOpen(!open);

  const menuItems = [
    { text: "Books", icon: <MenuBook />, path: "/books" },
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Logout", icon: <Logout />, path: "/logout" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 80,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 80,
          background: "rgba(22, 27, 34, 0.9)",
          borderRight: "1px solid #30363d",
          color: "#c9d1d9",
          backdropFilter: "blur(10px)",
          transition: "width 0.3s ease-in-out",
        },
      }}
    >
      {/* Sidebar Toggle Button */}
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": { backgroundColor: "#21262d", boxShadow: "0px 0px 12px #58a6ff" },
        }}
        onClick={toggleDrawer}
      >
        <Tooltip title="Toggle Sidebar">
          <Menu sx={{ fontSize: 30, color: "#58a6ff", transition: "0.3s", "&:hover": { transform: "rotate(90deg)" } }} />
        </Tooltip>
      </Box>

      {/* Navigation Links */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <NavLink
              to={item.path}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: "10px",
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "#21262d", boxShadow: "0px 0px 12px #58a6ff" },
                }}
              >
                <Tooltip title={item.text} placement="right">
                  <ListItemIcon sx={{ color: "#58a6ff", minWidth: 40 }}>{item.icon}</ListItemIcon>
                </Tooltip>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>

      {/* Divider */}
      <Divider sx={{ backgroundColor: "#30363d", my: 2 }} />

      {/* Favorite Books Section */}
      <Box sx={{ px: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#58a6ff",
            fontWeight: "bold",
            textAlign: open ? "left" : "center",
            transition: "0.3s",
          }}
        >
          {open ? "Favorite Books" : <Favorite />}
        </Typography>

        <List>
          {favoriteBooks.length > 0 ? (
            favoriteBooks.map((book) => (
              <ListItem key={book.id} disablePadding>
                <Tooltip title={book.title} placement="right">
                  <ListItemButton
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: "8px",
                      transition: "0.3s",
                      "&:hover": { backgroundColor: "#21262d", boxShadow: "0px 0px 12px #58a6ff" },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#f43f5e", minWidth: 40 }}>
                      <Favorite />
                    </ListItemIcon>
                    {open && (
                      <Typography
                        sx={{
                          color: "#c9d1d9",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                        }}
                      >
                        {book.title.length > 20 ? book.title.slice(0, 17) + "..." : book.title}
                      </Typography>
                    )}
                    <IconButton onClick={() => dispatch(removeFavoriteBook(book.id))} sx={{ color: "#f43f5e" }}>
                      <Delete />
                    </IconButton>
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))
          ) : (
            <Typography
              sx={{
                color: "#8b949e",
                fontSize: "0.9rem",
                textAlign: "center",
                mt: 1,
                transition: "0.3s",
              }}
            >
              {open ? "No favorites added yet" : ""}
            </Typography>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
