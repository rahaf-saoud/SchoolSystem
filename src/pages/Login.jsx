import { useState } from "react";
import { OutlinedInput, TextField, useTheme } from "@mui/material";
import {
  Container,
  Stack,
  Button,
  Typography,
  IconButton,
  FormControl,
  InputAdornment,
  InputLabel,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import axios from "axios";
export default function Login() {
  const theme = useTheme();
  async function log(email, password) {
    try {
      const res = await axios.post(
        "https://abdullatif1999.pythonanywhere.com/api/token/",
        {
          email,
          password,
        },
        { headers: { "Content-Type": "application/json" } },
      );
      {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const [info, setInfo] = useState({
    email: "test3@gmail.com",
    password: "123456789",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "flex",
        justifyContent: "space-between",
        margin: "40px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            height: "4rem",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            color: "background.default",
            justifyContent: "center",
            variant: "h1",
            fontSize: "20px",
            marginBottom: "0px",
            bgcolor: "text.primary",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          Welcome again
        </Typography>

        <Container
          maxWidth="md"
          sx={{
            bgcolor: "background.paper",
            borderTopRightRadius: "0px",
            borderTopLeftRadius: "0px",
            borderRadius: "8px",
            boxShadow: "10px 10px  12px rgb(56, 54, 54)",
            marginTop: "0px",
          }}
        >
          <Stack spacing={4} sx={{ margin: "20px" }}>
            <TextField
              sx={{
                // Set the color for the inputted text
                "& .MuiOutlinedInput-input": {
                  color: theme.palette.text.primary,
                },

                // Set the color for the label when focused
                "& label.Mui-focused": {
                  color: theme.palette.text.primary,
                },
                "& label": {
                  color: theme.palette.text.primary,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    //border color
                    borderColor: theme.palette.text.primary,
                  },
                  "&:hover fieldset": {
                    // Hover border color
                    borderColor: theme.palette.background.paper,
                  },
                  "&.Mui-focused fieldset": {
                    // Focused border color
                    borderColor: theme.palette.text.primary,
                  },
                },
              }}
              id="log_email"
              label="Email"
              variant="outlined"
              value={info.email}
              onChange={(e) => {
                setInfo({ ...info, email: e.target.value });
              }}
            />
            <FormControl
              sx={{
                "& .MuiInputLabel-root.Mui-focused": {
                  color: theme.palette.text.primary,
                },

                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: theme.palette.text.primary,
                    borderWidth: "1px",
                  },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.text.primary,
                },
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={info.password}
                onChange={(e) => {
                  setInfo({ ...info, password: e.target.value });
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      color={theme.palette.text.primary}
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff
                          style={{ color: theme.palette.text.primary }}
                        />
                      ) : (
                        <Visibility
                          style={{ color: theme.palette.text.primary }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Stack>
          <Typography
            sx={{
              textAlign: "left",
              marginTop: "5px",
              marginLeft: "5px",
              color: "text.primary",
            }}
          >
            {" "}
            did you forget your password?
          </Typography>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                color: "text.primary",
                width: "40%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              onClick={(e) => {
                e.preventDefault();
                log(info.email, info.password);
              }}
            >
              Log In
            </Button>
          </div>
        </Container>
      </div>
      <div>
        <img src="src\assets\images\logo.png" width="500px" />
      </div>
    </div>
  );
}
