import React from "react";
import { Grid } from "@mui/material";
import CourseCard from "./CourseCard/CourseCard";

const CourseGrid = ({ courses }) => {
  return (
    <Grid container spacing={4}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Grid>
  );
};

export default CourseGrid;
