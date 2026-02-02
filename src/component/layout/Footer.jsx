import React from "react";
import { Box, Container, Typography, IconButton, Stack} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

export default function Footer() {


  return (
    <Box 
      component="footer"
      sx={{ 
        backgroundColor: "background.paper", // نفس خلفية الهيدر
        borderTop: "1px solid", 
        borderColor: "divider",
        py: 2.5 
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between", // واحد أقصى اليسار وواحد أقصى اليمين
            alignItems: "center",
            gap: 2
          }}
        >
          
          {/* اليسار: حقوق النشر مكان اللوجو */}
          <Typography 
            variant="body2" 
            sx={{ 
              color: "text.primary", 
              fontWeight: 500,
              textAlign: { xs: "center", md: "left" }
            }}
          >
            © {new Date().getFullYear()} Edu Connect. All rights reserved.
          </Typography>

          {/* اليمين: أيقونات التواصل الاجتماعي */}
          <Stack direction="row" spacing={1}>
            <IconButton 
              size="small" 
              sx={{ 
                color: "text.primary",
                "&:hover": { color: "primary.main", transform: "scale(1.1)" },
                transition: "0.2s"
              }}
            >
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ 
                color: "text.primary",
                "&:hover": { color: "primary.main", transform: "scale(1.1)" },
                transition: "0.2s"
              }}
            >
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ 
                color: "text.primary",
                "&:hover": { color: "primary.main", transform: "scale(1.1)" },
                transition: "0.2s"
              }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ 
                color: "text.primary",
                "&:hover": { color: "primary.main", transform: "scale(1.1)" },
                transition: "0.2s"
              }}
            >
              <Instagram fontSize="small" />
            </IconButton>
          </Stack>

        </Box>
      </Container>
    </Box>
  );
}