import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Country, City } from "country-state-city";
import {
  Stack,
  TextField,
  Container,
  Typography,
  Button,
  IconButton,
  Autocomplete,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material";

export default function Register() {
  const theme = useTheme();
  const seStyle = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.text.primary,
    },
    "& label.Mui-focused": {
      color: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.text.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.text.primary,
      },
    },
  };
  const textSt = {
    // Set the color for the inputted text
    "& .MuiOutlinedInput-input": {
      color: theme.palette.text.primary,
    },

    // Set the color for the label when focused
    "& label.Mui-focused": {
      color: theme.palette.text.primary,
    },
    "& label": {
      color: theme.palette.text.secondary,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        //border color
        borderColor: theme.palette.text.primary,
      },
      // "&:hover fieldset": {
      //   // Hover border color
      //   borderColor: theme.palette.background.paper,
      // },
      "&.Mui-focused fieldset": {
        // Focused border color
        borderColor: theme.palette.text.primary,
      },
    },
  };
  const [cont, setCont] = useState([]);
  const contries = [];
  const Cities = [];

  const [info, setInfo] = useState({
    name: "",
    type: "",
    currency: "",
    country: "",
    city: "",

    user: {
      phone: "",
      email: "",
      password: "",
    },
  });

  function getallcont() {
    Country.getAllCountries().map((c) => {
      if (!contries.includes(c.name)) contries.push(c.name);
    });
  }
  function getCity(country) {
    Country.getAllCountries().filter((c) => {
      if (c.name == country) {
        City.getCitiesOfCountry(c.isoCode).map((c) => {
          Cities.push(c.name);
        });
      }
    });
  }

  useEffect(() => {
    getallcont();
    setCont(contries);
  }, []);
  useEffect(() => {
    getCity(info.country);
  }, [info.country]);

  async function register(a) {
    try {
      const res = await axios.post(
        "https://abdullatif1999.pythonanywhere.com/school/create",
        {
          name: a.name,
          type: a.type,
          currency: a.currency,
          country: a.country,
          city: a.city,

          user: {
            phone: a.user.phone,
            email: a.user.email,
            password: a.user.password,
          },
        },
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
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
        // flexDirection: "column",
        justifyContent: "space-around",
        margin: "40px auto",
        width: "100%",
        padding: "20px",
      }}
    >
      <div style={{ width: "30%" }}>
        <img src="src\assets\images\logo.png" width="400px" />
      </div>
      <div style={{ width: "50%" }}>
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
          Welcome{" "}
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
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Stack spacing={1} sx={{ margin: "20px" }}>
                <TextField
                  sx={textSt}
                  id="reg_name"
                  label="Name"
                  variant="outlined"
                  value={info.name}
                  onChange={(e) => {
                    setInfo({ ...info, name: e.target.value });
                  }}
                />
                <Autocomplete
                  sx={seStyle}
                  value={info.country}
                  onChange={(e, newvalue) => {
                    setInfo({ ...info, country: newvalue, city: "" });
                  }}
                  disablePortal
                  options={cont}
                  renderInput={(params) => (
                    <TextField {...params} label="Country" />
                  )}
                />
                <Autocomplete
                  sx={seStyle}
                  value={info.city}
                  onChange={(e, newvalue) => {
                    setInfo({ ...info, city: newvalue });
                  }}
                  disablePortal
                  options={Cities}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="City"
                      style={{ color: "text.primary" }}
                    />
                  )}
                />
                <TextField
                  sx={textSt}
                  id="log_email"
                  label="Email"
                  variant="outlined"
                  value={info.user.email}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      user: { ...info.user, email: e.target.value },
                    });
                  }}
                />
              </Stack>
            </div>
            <div>
              <Stack spacing={1} sx={{ margin: "20px" }}>
                <Autocomplete
                  sx={seStyle}
                  value={info.type}
                  onChange={(e, newvalue) => {
                    setInfo({ ...info, type: newvalue });
                  }}
                  disablePortal
                  options={["primary", "preparatory", "high"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Type"
                      style={{ color: "text.primary" }}
                    />
                  )}
                />
                <Autocomplete
                  sx={seStyle}
                  value={info.currency}
                  onChange={(e, newvalue) => {
                    setInfo({ ...info, currency: newvalue });
                  }}
                  disablePortal
                  options={["SP", "USD", "EREO"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Currency"
                      style={{ color: "text.primary" }}
                    />
                  )}
                />
                <TextField
                  id="Phone"
                  label="Phone"
                  variant="outlined"
                  value={info.user.phone}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      user: { ...info.user, phone: e.target.value },
                    });
                  }}
                  sx={textSt}
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
                    value={info.user.password}
                    onChange={(e) => {
                      setInfo({
                        ...info,
                        user: { ...info.user, password: e.target.value },
                      });
                    }}
                    type={showPassword ? "text" : "password"}
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
            </div>
          </div>
          <Typography
            sx={{
              textAlign: "left",
              marginTop: "5px",
              marginLeft: "5px",
              color: "text.primary",
            }}
          >
            {" "}
            you have an account ?
          </Typography>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                color: "text.primary",
                width: "40%",
                marginTop: "10px",
                marginBottom: "15px",
              }}
              onClick={(e) => {
                e.preventDefault();
                register(info);
              }}
            >
              Register
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
