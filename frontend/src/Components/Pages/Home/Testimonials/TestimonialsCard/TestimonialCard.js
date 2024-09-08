import React from 'react';
import { Card, Grid, Box, Typography, Avatar } from '@mui/material';

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card elevation={3}>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundRepeat: "repeat",
              backgroundSize: "150px",
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant="body1" fontStyle="italic" color="text.secondary">
              {testimonial.description}
            </Typography>
            <Box display="flex" alignItems="center" mt={3}>
              <Avatar alt={`${testimonial.name[0]}'s Avatar`} />
              <Box ml={2}>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.position}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TestimonialCard;
