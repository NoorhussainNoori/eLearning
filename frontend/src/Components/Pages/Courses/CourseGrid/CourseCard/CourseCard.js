import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const CourseCard = ({ course }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6" noWrap>
            {course.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" noWrap>
            {course.category}
          </Typography>
          <Typography variant="body2" paragraph>
            {course.description}
          </Typography>
          <Typography variant="h6" color="primary">
            ${course.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" fullWidth>
            Enroll
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CourseCard;
