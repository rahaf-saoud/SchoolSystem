import {
    Avatar,
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    IconButton,
    Pagination,
    Rating,
    Typography,
  } from "@mui/material";
  import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
  import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
  import { useTheme } from "@mui/material/styles";
  import React, { useState } from "react";
  
  const testimonials = [
    {
        name: "Jenny Wilson",
        text: "It is a long established fact that a reader will be distracted by the readable content...",
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      },
      {
        name: "Robert Fox",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Courtney Henry",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      },
      {
        name: "Courtney Henry",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      },
      
  ];
  
  const TestimonialsSection = () => {
    const theme = useTheme();
    const [index, setIndex] = useState(0);
  
    const handleNext = () => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    };
  
    const handlePrev = () => {
      setIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    };
  
    return (
      <Box
        sx={{
          py: 8,
          position: "relative",
          background: theme.palette.background.default,
        }}
      >
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
                    Testimonials
                  </span>
                </Typography>
        <Container maxWidth="sm" sx={{ textAlign: "center", position: "relative" }}>
          

          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: -50,
              top: "50%",
              transform: "translateY(-50%)",
              background: theme.palette.primary.main,
              color: "white",
              "&:hover": { background: theme.palette.primary.dark },
              zIndex: 10,
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
  
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: -50,
              top: "50%",
              transform: "translateY(-50%)",
              background: theme.palette.primary.main,
              color: "white",
              "&:hover": { background: theme.palette.primary.dark },
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
  
         
          <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <Avatar
              src={testimonials[index].img}
              sx={{
                width: 80,
                height: 80,
                border: `4px solid ${theme.palette.secondary.main}`,
                position: "absolute",
                top: -2,
                zIndex: 3,
              }}
            />
          </Box>
  
         
          <Card
            sx={{
              mt: 6,
              pt: 6,
              pb: 4,
              px: 3,
              background: theme.palette.background.paper,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 20,
                  color: theme.palette.text.primary,
                  mb: 2,
                }}
              >
                {testimonials[index].name}
              </Typography>
              <Rating defaultValue={2}/>
  
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                {testimonials[index].text}
              </Typography>
            </CardContent>
          </Card>
  
          {/* Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination
              count={testimonials.length}
              page={index + 1}
              onChange={(e, value) => setIndex(value - 1)}
              shape="rounded"
              siblingCount={0}
              boundaryCount={0}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: theme.palette.secondary.main,
                },
                "& .Mui-selected": {
                  backgroundColor: `${theme.palette.secondary.main} !important`,
                  color: "white",
                },
              }}
            />
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default TestimonialsSection;
  