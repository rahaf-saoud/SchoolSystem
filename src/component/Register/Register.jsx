import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { StyledIn } from "../component/LogInTf";
import { Outlinedin } from "../component/OutlinedIn";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Country, City } from "country-state-city";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Register() {
  // const [info.country, setCurrentContry] = useState("");
  // const [currentcity, setCurretCity] = useState("");
  const [cont, setCont] = useState([]);
  const contries = [];
  const Cities = [];
  function getallcont() {
    Country.getAllCountries().map((c) => {
      contries.push(c.name);
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
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    copassword: "",
    contry: "",
    city: "",
    phone: "",
    role: "teacher",
  });
  useEffect(() => {
    getCity(info.contry);
  }, [info.contry]);

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
        justifyContent: "space-between",
        margin: "40px auto",
        width: "80%",
      }}
    >
      <div>
        <img src="src\assets\images\logo.png" width="500px" />
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
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Stack spacing={1} sx={{ margin: "20px" }}>
                <StyledIn
                  id="reg_name"
                  label="Name"
                  variant="outlined"
                  value={info.name}
                  onChange={(e) => {
                    setInfo({ ...info, name: e.target.value });
                  }}
                />
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
                    value={info.password}
                    onChange={(e) => {
                      setInfo({ ...info, password: e.target.value });
                    }}
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
                    {" "}
                    Conformation
                  </InputLabel>
                  <Outlinedin
                    value={info.copassword}
                    onChange={(e) => {
                      setInfo({ ...info, copassword: e.target.value });
                    }}
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
            </div>
            <div>
              <Stack spacing={1} sx={{ margin: "20px" }}>
                <Autocomplete
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3a2219",
                    },
                    "& label.Mui-focused": {
                      color: "#3a2219",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#3a2219",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3a2219",
                      },
                    },
                  }}
                  value={info.contry}
                  onChange={(e, newvalue) => {
                    setInfo({ ...info, contry: newvalue });
                    (p) => setInfo({ p, city: "" });
                  }}
                  disablePortal
                  options={cont}
                  renderInput={(params) => (
                    <TextField {...params} label="Contry" />
                  )}
                />

                <Autocomplete
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3a2219",
                    },
                    "& label.Mui-focused": {
                      color: "#3a2219",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#3a2219",
                      },

                      "&.Mui-focused fieldset": {
                        borderColor: "#3a2219",
                      },
                    },
                  }}
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
                <StyledIn
                  id="Phone"
                  label="Phone"
                  variant="outlined"
                  value={info.phone}
                  onChange={(e) => {
                    setInfo({ ...info, phone: e.target.value });
                  }}
                />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Role
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={info.role}
                    onChange={(e) => {
                      setInfo({ ...info, role: e.target.value });
                    }}
                  >
                    <div style={{ marginLeft: "20px" }}>
                      <FormControlLabel
                        sx={{ color: "text.primary" }}
                        value="Teacher"
                        control={<Radio />}
                        label="Teacher"
                        style={{ color: "text.primary" }}
                      />
                      <FormControlLabel
                        sx={{ color: "text.primary" }}
                        value="Manager"
                        control={<Radio />}
                        label="Manager"
                      />
                    </div>
                  </RadioGroup>
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
            >
              Register
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
