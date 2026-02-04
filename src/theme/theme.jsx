
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#79A3C3" }, // Chambray
    secondary: { main: "#957662" }, // Clay
    background: {
      default: "#D2E2EC", // Glacier
      paper: "#ecd4c2",
      secondary:"#79A3C3" // Bisque
    },
    text: {
      primary: "#3A2119", // Espresso
      secondary: "#957662",
      white:"#ffffff"
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h2: { fontWeight: 800 },
    h5: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 20 },
});

export default theme;