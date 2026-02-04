import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

const Outlinedin = styled(OutlinedInput)({
  // Set the color for the inputted text
  "& .MuiOutlinedInput-input": {
    color: "#3a2219",
    borderColor: "#3a2219",
  },

  // Set the color for the label when focused
  "& label.Mui-focused": {
    color: "#3a2219",
  },
  "& label": {
    color: "#3a2219",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#3a2219",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3a2219",
    borderWidth: "1px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      //border color
      borderColor: "#3a2219",
      borderWidth: 2,
    },
    "&:hover fieldset": {
      // Hover border color
      borderColor: "background.paper",
    },
    "&.Mui-focused fieldset": {
      // Focused border color
      borderColor: "#3a2219",
      borderWidth: "3px",
    },
  },
});
export { Outlinedin };
