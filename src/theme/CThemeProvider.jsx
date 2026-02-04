
import { createTheme } from "@mui/material/styles";
 import { CThemeContext } from "./CThemContext";
 export default function CThemeProvider({children}){
 const theme = createTheme({
    palette: {
      primary: {
        main: "#79A3C3", // Chambray
      },
      secondary: {
        main: "#957662", // Clay
      },
      background: {
        default: "#D2E2EC", // Glacier
        paper: "#EBCDB7", // Bisque
      },
      text: {
        primary: "#3A2119", // Espresso
        secondary: "#957662",
      },
    },
    typography: {
      fontFamily: "'Poppins', 'Roboto', sans-serif",
      h2: {
        fontWeight: 800,
      },
      h5: {
        fontWeight: 600,
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    shape: {
      
    },
  });
 
    return(
<CThemeContext.Provider value={{theme:theme}}>
{children}
</CThemeContext.Provider>)
 }