import React from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </Box>
  );
};

export default SearchBar;
