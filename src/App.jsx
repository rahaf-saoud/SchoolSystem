import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}


