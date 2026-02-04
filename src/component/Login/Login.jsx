import { useState } from "react";
import Container from "@mui/material/Container";
import { StyledIn } from "../component/LogInTf";
import { Outlinedin } from "../component/OutlinedIn";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function Login() {
  const [info, setInfo] = useState({ email: "", password: "" });
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
            <StyledIn
              id="log_email"
              label="Email"
              variant="outlined"
              value={info.email}
              onChange={(e) => {
                setInfo({ ...info, email: e.target.value });
              }}
            />
            {/* <StyledIn
          id="log_password"
          label="Password"
          variant="outlined"
          value={info.password}
          onChange={(e) => {
            setInfo({ ...info, password: e.target.value });
          }}
        /> */}
            <FormControl
              sx={{
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#3a2219",
                },

                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3a2219",
                    borderWidth: "1px",
                  },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3a2219",
                },
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <Outlinedin
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      color="#3a2219"
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
                        <VisibilityOff style={{ color: "#3a2219" }} />
                      ) : (
                        <Visibility style={{ color: "#3a2219" }} />
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
