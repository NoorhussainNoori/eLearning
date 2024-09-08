import React from "react";
import TestimonialsCard from "./TestimonialsCard/TestimonialCard";
import { Grid, Typography } from "@mui/material";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      description:
        "I was hesitant at first, but the team's expertise and attention to detail made the process seamless. Highly recommended!",
      name: "John Smith",
      position: "CTO, Acme Inc.",
    },
    {
      id: 2,
      description:
        "The support team went above and beyond to address my concerns. I'm extremely satisfied with the level of service.",
      name: "Jane Doe",
      position: "CEO, Acme Inc.",
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
          }}
        >
          Testimonials
        </Typography>
      </Grid>
      {testimonials.map((testimonial) => {
        return (
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Testimonials;
