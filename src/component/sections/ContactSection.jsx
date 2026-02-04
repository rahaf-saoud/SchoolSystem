import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PrintIcon from "@mui/icons-material/Print";

export default function ContactSection() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 24, color: "white" }} />,
      text: "32, Avenue ve Newyork\n321994 Newyork",
    },
    {
      icon: <EmailIcon sx={{ fontSize: 24, color: "white" }} />,
      text: "hello@loremipsum.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 24, color: "white" }} />,
      text: "+3356 1589 2105",
    },
    {
      icon: <PrintIcon sx={{ fontSize: 24, color: "white" }} />,
      text: "+3356 1589 2100",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{
            mb: 6,
            fontWeight: 600,
            letterSpacing: 1,
            fontSize: { xs: 20, md: 28 },
            color: theme.palette.text.primary,
          }}
        >
          <span style={{ color: theme.palette.text.primary }}>Contact</span>
          <span
            style={{
              color: theme.palette.text.secondary,
              marginLeft: 8,
            }}
          >
            Us
          </span>
        </Typography>

        <Box
          sx={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Contact Info Card */}
          <Paper
            elevation={12}
            sx={{
              bgcolor: "primary.main",
              color: "white",
              py: 5,
              px: 8,
              borderRadius: 1,
              boxShadow: "0px 20px 50px rgba(121, 163, 195, 0.4)",
              position: "absolute",
              bottom: "80px", // ⬅️ أقرب للفورم
              left: { xs: "5%", md: "-40px" }, // ⬅️ قربناه شوي
              width: { xs: "100%", md: "350px" }, // ⬅️ أصغر شوي
              height: { xs: "100%", md: "480px" },
              zIndex: 10,
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 4, fontWeight: 700, color: "white" }}
            >
              Edu Connect Info
            </Typography>

            {contactInfo.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box sx={{ color: "white", mt: 0.5 }}>{item.icon}</Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    whiteSpace: "pre-line",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
            <Typography
              variant="body2"
              sx={{ mb: 4, fontWeight: 500, color: "white" }}
            >
              “ We respond fast — usually within minutes, not hours.”
            </Typography>
          </Paper>

          {/* Form Card */}
          <Paper
            elevation={8}
            sx={{
              bgcolor: "background.paper",
              py: { xs: 5, md: 7 },
              px: { xs: 5, md: 8 },
              pt: { xs: 22, md: 7 },
              borderRadius: 1,
              boxShadow: "0px 20px 60px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <Box
              sx={{
                pl: { xs: 0, md: "300px" }, // ⬅️ هذا أهم تعديل — قرب الفورم للـ info
              }}
            >
              <Typography
                variant="h4"
                sx={{ mb: 1, fontWeight: 700, color: "text.primary" }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 5, color: "text.secondary" }}
              >
                Feel free to drop us a line below!
              </Typography>

              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <TextField
                  fullWidth
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0.5,
                      backgroundColor: "#f5f5f5",
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0.5,
                      backgroundColor: "#f5f5f5",
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Typing your message here..."
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0.5,
                      backgroundColor: "#f5f5f5",
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    px: 7,
                    py: 1.5,
                    borderRadius: 10,
                    textTransform: "uppercase",
                    alignSelf: "center",
                    fontWeight: 600,
                    boxShadow: "0px 8px 20px rgba(121, 163, 195, 0.3)",
                    "&:hover": {
                      bgcolor: "#6891b0",
                      boxShadow: "0px 12px 28px rgba(121, 163, 195, 0.4)",
                    },
                  }}
                >
                  SEND
                </Button>
              </form>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
