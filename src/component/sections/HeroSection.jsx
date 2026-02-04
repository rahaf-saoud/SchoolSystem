import React from "react";
import hero from "../../assets/images/hero.webp";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
  AvatarGroup,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Box
    id="home"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: 700 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #F4F9FC 100%)`,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        py: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* LEFT CONTENT */}
          <MotionBox
            sx={{ flex: 1.2, textAlign: { xs: "center", md: "left" }, zIndex: 2 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MotionTypography
              variant="h2"
              sx={{
                color: "text.primary",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
                mb: 3,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Manage Your School <br />
              & Learn Online <br />
              In One Place
            </MotionTypography>

            <MotionTypography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                mb: 5,
                maxWidth: "500px",
                lineHeight: 1.6,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              A powerful multi-school platform to manage faculty and
              administrative tasks, while providing students with a seamless
              virtual classroom experience
            </MotionTypography>

            <Stack
              direction="row"
              spacing={3}
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems="center"
            >
              <MotionButton
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  borderRadius: "50px",
                  px: 4,
                  py: 1.5,
                  boxShadow: `0 10px 20px ${theme.palette.primary.main}33`,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </MotionButton>
            </Stack>
          </MotionBox>

          {/* RIGHT IMAGE */}
          <MotionBox
            sx={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <MotionBox
              sx={{
                position: "relative",
                width: { xs: 320, md: 480 },
                height: { xs: 320, md: 480 },
                backgroundColor: "background.paper",
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                overflow: "hidden",
                border: `8px solid white`,
                display: "flex",
                alignItems: "flex-end",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <Box
                component="img"
                src={hero}
                alt="Hero"
                loading="eager"
                fetchPriority="high"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MotionBox>

            {/* TOP FLOAT CARD */}
            <MotionBox
              sx={{
                position: "absolute",
                top: "15%",
                left: { xs: "0%", md: "-5%" },
                bgcolor: "white",
                p: 1.5,
                borderRadius: theme.shape.borderRadius,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                zIndex: 3,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <AvatarGroup max={3}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: "primary.light" }} />
                <Avatar
                  sx={{ width: 24, height: 24, bgcolor: "secondary.light" }}
                />
                <Avatar sx={{ width: 24, height: 24, bgcolor: "primary.main" }} />
              </AvatarGroup>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    color: "text.primary",
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  10K+
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", fontSize: "0.7rem" }}
                >
                  Students joined
                </Typography>
              </Box>
            </MotionBox>

            {/* BOTTOM FLOAT CARD */}
            <MotionBox
              sx={{
                position: "absolute",
                bottom: "10%",
                right: { xs: "0%", md: "-5%" },
                bgcolor: "white",
                p: 2,
                borderRadius: theme.shape.borderRadius,
                boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                maxWidth: "210px",
                zIndex: 3,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: "secondary.main" }} />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, color: "text.primary" }}
                >
                  Our Faculty
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontStyle: "italic",
                  display: "block",
                }}
              >
                "Best guidance for every child."
              </Typography>
            </MotionBox>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
