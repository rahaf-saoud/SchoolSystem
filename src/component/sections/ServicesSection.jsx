import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Person from "@mui/icons-material/Person";
import School from "@mui/icons-material/School";
import Assessment from "@mui/icons-material/Assessment";
import Event from "@mui/icons-material/Event";

export default function ServicesSection() {
  const theme = useTheme();

  const features = [
    {
      title: "Students",
      desc: "Manage student profiles, grades, and progress.",
      icon: <Person sx={{ fontSize: 40, color: "inherit" }} />,
      number: "01",
      color: theme.palette.primary.main, // #79A3C3 (Chambray)
    },
    {
      title: "Teachers",
      desc: "Track staff performance and schedules.",
      icon: <School sx={{ fontSize: 40, color: "inherit" }} />,
      number: "02",
      color: theme.palette.secondary.main, // #957662 (Clay)
    },
    {
      title: "Reports",
      desc: "Generate smart analytics and reports.",
      icon: <Assessment sx={{ fontSize: 40, color: "inherit" }} />,
      number: "03",
      color: theme.palette.primary.main, // #79A3C3 (Chambray)
    },
    {
      title: "Activities",
      desc: "Organize school activities and events.",
      icon: <Event sx={{ fontSize: 40, color: "inherit" }} />,
      number: "04",
      color: theme.palette.secondary.main, // #957662 (Clay)
    },
  ];

  return (
    <Box
    id='services'
      sx={{
        py: 6,
        background: "linear-gradient(135deg, #D2E2EC 0%, #ecd4c2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >

   
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          align="center"
          sx={{
            mb: 4,
            fontWeight: 600,
            letterSpacing: 1,
            fontSize: { xs: 20, md: 28 },
            color: theme.palette.text.primary,
          }}
        >
          <span style={{ color: theme.palette.text.primary }}>Our</span>
          <span
            style={{
              color: theme.palette.text.secondary,
              marginLeft: 8,
            }}
          >
            Services
          </span>
        </Typography>

        <Grid container spacing={8} justifyContent="center">
          {features.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                sx={{
                  position: "relative",
                  height: 200,
                  transition: "0.35s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                {/* Glow Effect */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "85%",
                    height: "85%",
                    borderRadius: "20px",
                    filter: "blur(15px)",
                    background: `linear-gradient(135deg, ${item.color}30, ${item.color}05)`,
                    zIndex: 0,
                  }}
                />

                {/* Main Card */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    p: 2,
                    height: "100%",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    overflow: "hidden",
                  }}
                >
                  {/* Colored Border Corner (L-Shape) */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 80,
                      height: 80,
                      background: `linear-gradient(135deg, ${item.color}15, transparent 70%)`,
                      borderRadius: "0 20px 0 60px",
                      zIndex: 1,
                    }}
                  />

                  {/* Border Line */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "20px",
                      border: `2px solid ${item.color}`,
                      pointerEvents: "none",
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 35%, 65% 35%, 65% 100%, 0 100%)",
                      zIndex: 0,
                    }}
                  />

                  {/* Icon */}
                  <Box
                    sx={{
                      fontSize: 40,
                      color: item.color,
                      mb: 1,
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 25,
                      mb: 0.5,
                      color: theme.palette.text.primary,
                      letterSpacing: 0.3,
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: 12,
                      maxWidth: "200px",
                      color: theme.palette.text.secondary,
                      lineHeight: 1.4,
                      mb: 1,
                      position: "relative",
                      zIndex: 3,
                      flex: 1,
                    }}
                  >
                    {item.desc}
                  </Typography>

                  {/* Number */}
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: item.color,
                      position: "relative",
                      zIndex: 3,
                      marginTop: "auto",
                    }}
                  >
                    {item.number}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}