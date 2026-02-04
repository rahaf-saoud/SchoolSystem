import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";


const StyledIn = styled(TextField)(

  {

  // Set the color for the inputted text
  "& .MuiOutlinedInput-input": {
    color: "#3a2219", 

  },

  
  // Set the color for the label when focused
  "& label.Mui-focused": {
    color: "#3a2219",

  },
  "& label": {
    color: "text.primary",
    
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      //border color
      borderColor: "#3a2219", 
     
    },
    "&:hover fieldset": {
      // Hover border color
      borderColor: "background.paper", 
    },
    "&.Mui-focused fieldset": {
      // Focused border color
      borderColor: "#3a2219", 
      
  
    },
  },
});
export { StyledIn };
