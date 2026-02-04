import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  CardMedia,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';

const BigBlogCard = ({ title, date, category, description, image }) => (
  <Box sx={{ width: '100%' }}>
    <CardMedia
      component="img"
      image={image}
      sx={{
        borderRadius: '24px',
        height: 220,
        width: '100%',
        mb: 2,
        objectFit: 'cover',
      }}
    />
    <Stack direction="row" spacing={2} mb={1}>
      <Typography variant="caption" sx={{ color: '#957662', fontSize: '0.75rem' }}>{date}</Typography>
      <Typography variant="caption" sx={{ color: '#957662', fontSize: '0.75rem' }}>{category}</Typography>
    </Stack>
    <Typography variant="h6" sx={{ fontWeight: 800, color: '#3A2119', mb: 1, lineHeight: 1.2, fontSize: '1rem' }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: '#957662', lineHeight: 1.6, fontSize: '0.8rem' }}>
      {description}
    </Typography>
  </Box>
);

const SmallListPost = ({ title, date, category, image }) => {
    
    return (
        <Box>
      <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ py: 1.8 }}>
        <CardMedia
          component="img"
          image={image}
          sx={{ width: 90, height: 60, borderRadius: '12px', objectFit: 'cover' }}
          />
        <Box>
          <Stack direction="row" spacing={1} mb={0.2}>
            <Typography variant="caption" sx={{ color: '#957662', fontSize: '0.7rem' }}>{date}</Typography>
            <Typography variant="caption" sx={{ color: '#957662', fontSize: '0.7rem' }}>{category}</Typography>
          </Stack>
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#3A2119', lineHeight: 1.2, fontSize: '0.85rem' }}>
            {title}
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ borderColor: 'rgba(58, 33, 25, 0.1)' }} />
    </Box>
  );
};

const BlogSection = () => {
    const theme = useTheme();
  return (
    <Box sx={{ py: 10, bgcolor: '#D2E2EC', minHeight: '80vh' }} id='blog'>
      <Container maxWidth="lg">

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
                    <span style={{ color: theme.palette.text.primary }}>Our Latest</span>
                    <span style={{ color: theme.palette.text.secondary, marginLeft: 8 }}>
                    Blog Posts
                    </span>
                  </Typography>
        
                </Box>

        <Grid container spacing={4}>

          <Grid size={{ xs: 12, md: 4 }}>
            <BigBlogCard
              image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500"
              date="08-11-2021"
              category="Category"
              title="Believing neglected so so allowance existence departure."
              description="Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <BigBlogCard
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500"
              date="08-11-2021"
              category="Category"
              title="In design active temper be uneasy. Thirty for remove plenty regard you."
              description="Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything."
            />
          </Grid>

          {/* Column 3: The Sidebar List (4 Small Posts) */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack sx={{ mt: -1.8 }}>
              <SmallListPost
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200"
                date="08-11-2021" category="Category"
                title="Partiality on or continuing in particular principles"
              />
              <SmallListPost
                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200"
                date="08-11-2021" category="Category"
                title="Do believing oh disposing to supported allowance we."
              />
              <SmallListPost
                image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=200"
                date="08-11-2021" category="Category"
                title="Village did removed enjoyed explain nor ham saw."
              />
              <SmallListPost
                image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200"
                date="08-11-2021" category="Category"
                title="Securing as informed declared or margaret"
              />
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;