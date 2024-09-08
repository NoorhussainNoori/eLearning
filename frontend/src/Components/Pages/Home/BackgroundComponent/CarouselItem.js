import { Grid, Box, Typography, Button } from "@mui/material";

export default function CarouselItem({ course }) {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Box
          component={"img"}
          src={course.image}
          alt={course.title}
          width={"100%"}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography
            variant="h4"
            component="h3"
            fontWeight="bold"
            gutterBottom
          >
            {course.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {course.description}
          </Typography>
          <Button variant="contained" component={course.Link} to="#">
            Learn More
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
