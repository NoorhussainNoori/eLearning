import React from "react";
import { Outlet } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/poppins";
import Navbar from "./Components/layout/Navbar/Nav";
import Footer from "./Components/layout/Footer/Footer";
const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
      h3: {
        color: "darkred",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box marginTop={4} marginBottom={4}>
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
