import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { 
  AppBar, Toolbar, Typography, Button, Box, Stack, 
  IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = ["Home", "Services", "Blog","About Us",  "Contact Us"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700, color: "primary.main" }}>
        Edu Connect
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item} component="button" sx={{ border: "none", bgcolor: "transparent", width: "100%", textAlign: "center" }}>
            <ListItemText primary={item} sx={{ color: "text.primary" }} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2, borderRadius: 999 }}>
        Register
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: "background.paper", borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ width: 35, height: 35 }}
          />
          <Typography variant="h6" color="text.primary" fontWeight={700} sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Edu Connect
          </Typography>
        </Box>

        {!isMobile && (
          <Stack direction="row" spacing={1}>
            {navLinks.map((item) => (
              <Button key={item} sx={{ color: "text.primary", fontWeight: 500, textTransform: "none" }}>
                {item}
              </Button>
            ))}
          </Stack>
        )}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isMobile ? (
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 999, px: 3, textTransform: "none" }}
            >
              Register
            </Button>
          ) : (
            <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ color: "text.primary" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} 
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}