import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Blog", id: "blog" },
    { label: "About Us", id: "about" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontWeight: 700, color: "primary.main" }}
      >
        Edu Connect
      </Typography>

      <List>
        {navLinks.map((item) => (
          <ListItem
            key={item.label}
            component="a"
            href={`#${item.id}`}
            sx={{
              textAlign: "center",
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      {/* Mobile Auth Buttons */}
      <Stack spacing={1} sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ borderRadius: 999, textTransform: "none" }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ borderRadius: 999, textTransform: "none" }}
        >
          Register
        </Button>
      </Stack>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ width: 35, height: 35 }} />
          <Typography
            variant="h6"
            color="text.primary"
            fontWeight={700}
            sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
          >
            Edu Connect
          </Typography>
        </Box>

        {/* Desktop Nav */}
        {!isMobile && (
          <Stack direction="row" spacing={1}>
            {navLinks.map((item) => (
              <Button
                key={item.label}
                component="a"
                href={`#${item.id}`}
                sx={{ color: "text.primary", fontWeight: 500, textTransform: "none" }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        )}

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {!isMobile ? (
            <>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 999, px: 3, textTransform: "none" }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: 999, px: 3, textTransform: "none" }}
              >
                Register
              </Button>
            </>
          ) : (
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 260 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
