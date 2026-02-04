import React from "react";
import { Box, Container, Grid, Typography, Card, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export default function AboutUsSection() {
  const theme = useTheme();

  const features = [
    {
      icon: TrackChangesOutlinedIcon,
      title: "Our Mission",
      desc: "Empowering educational institutions with innovative technology to create seamless learning experiences worldwide.",
    },
    {
      icon: GroupsOutlinedIcon,
      title: "Expert Team",
      desc: "A dedicated team of educators and developers transforming digital education.",
    },
    {
      icon: EmojiEventsOutlinedIcon,
      title: "Proven Results",
      desc: "Trusted by 500+ schools and 10,000+ students achieving excellence.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 6,
        background:"linear-gradient(135deg, #D2E2EC 0%, #ecd4c2 100%)"
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={5}>
          <Typography
            sx={{
              mb: 2,
              fontWeight: 600,
              letterSpacing: 1,
              fontSize: { xs: 20, md: 28 },
              color: theme.palette.text.primary,
            }}
          >
            <span style={{ color: theme.palette.text.primary }}>About</span>
            <span style={{ color: theme.palette.text.secondary, marginLeft: 8 }}>
              Edu Connect
            </span>
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
            }}
          >
            We bridge the gap between traditional school administration and
            modern digital learning through one unified platform.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={6} mb={7}>
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} sm={6} key={i}>
                <Card
                  sx={{
                    p: 2,
                    borderRadius: "18px",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 14px 30px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box display="flex" gap={2} alignItems="flex-start">
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      }}
                    >
                      <Icon sx={{ color: "#fff", fontSize: 22 }} />
                    </Box>

                    {/* Text */}
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: 17,
                          mb: 0.5,
                          color: theme.palette.text.primary,
                        }}
                        >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                            fontSize: 12,
                      maxWidth: "250px",
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
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* CTA */}
        <Box
          sx={{
            borderRadius: "24px",
            p: 4,
            textAlign: "center",
            color: "#fff",
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
          }}
        >
          <Typography sx={{ fontSize: 22, fontWeight: 700, mb: 1 }}>
            Ready to Transform Your School?
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              mb: 3,
              opacity: 0.9,
              maxWidth: 420,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Join hundreds of schools already using Edu Connect to deliver better
            learning experiences.
          </Typography>

          <Button
            sx={{
              bgcolor: "#fff",
              color: theme.palette.primary.main,
              px: 3,
              py: 1,
              borderRadius: "999px",
              fontSize: 13,
              fontWeight: 600,
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            Schedule a Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
