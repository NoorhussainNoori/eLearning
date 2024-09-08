import React from "react";
import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem.js";
import reactImage from "./../../../../assets/react.png";
import DataScience from "./../../../../assets/react.png";
import WebDev from "./../../../../assets/react.png";

export default function BgCom() {
  const courses = [
    {
      title: "Introduction to Web Development",
      description:
        "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Perfect for beginners!",
      image: reactImage,
    },
    {
      title: "Data Science with Python",
      description:
        "Dive into data science and learn Python for data analysis, cleaning, and machine learning.",
      image: DataScience,
    },
    {
      title: "Mobile App Development with React Native",
      description:
        "Build cross-platform mobile apps using React Native. This course covers the fundamentals and hands-on practice.",
      image: WebDev,
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Carousel */}
      <Carousel>
        {courses.map((course) => (
          <CarouselItem key={course.id} course={course} />
        ))}
      </Carousel>
    </Container>
  );
}
