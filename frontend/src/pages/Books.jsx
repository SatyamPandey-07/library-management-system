import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import BookCard from "../components/BookCard";
import { fetchBooks, deleteBookAsync } from "../redux/slices/bookSlice";

const Books = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBookAsync(id));
  };

  return (
    <Box sx={{ backgroundColor: "#0d1117", minHeight: "100vh", color: "#c9d1d9", py: 6, px: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#58a6ff", mb: 4, textAlign: "center" }}>
        Available Books
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <CircularProgress sx={{ color: "#58a6ff" }} />
        </Box>
      ) : error ? (
        <Typography variant="h6" sx={{ color: "red", textAlign: "center" }}>
          {error}
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {books.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
              <BookCard title={book.title} author={book.author} cover={book.img} onDelete={() => handleDelete(book.id)} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Books;
