import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import Slider from "react-slick";
import reactImage from "./../../../../assets/react.png";
import DataScience from "./../../../../assets/datascience.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Recommended() {
  const navigate = useNavigate();
  const courses = [
    {
      title: "Introduction to Web Development",
      description:
        "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
      image: reactImage,
      link: "#",
    },
    {
      title: "Data Science Essentials",
      description:
        "Dive into the world of data science and learn how to analyze and interpret data.",
      image: DataScience,
      link: "#",
    },
    {
      title: "Mastering React.js",
      description:
        "Learn how to build modern, responsive web applications using React.js.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Graphic Design Fundamentals",
      description:
        "Learn the essential principles and techniques of graphic design.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Machine Learning for Beginners",
      description:
        "Explore the fundamentals of machine learning and how to apply it to real-world problems.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Digital Marketing Strategies",
      description:
        "Learn how to effectively market your business or products online.",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true, // Change to false if swipe issues persist
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true, // Enable smooth swipe even if user isn't perfectly centered
    touchMove: true, // Ensures touch gestures are supported
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleExploreButton = () => {
    navigate("/courses");
  };

  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box py={6} bgcolor="background.paper" color="text.primary">
          <Container maxWidth="lg">
            <Box mb={4}>
              <Typography variant="h3" component="h2" fontWeight="bold">
                Recommended Courses
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={1}>
                Explore our curated selection of online courses to enhance your
                skills.
              </Typography>
            </Box>

            <Slider {...settings}>
              {courses.map((course, index) => (
                <Box key={index} px={2}>
                  {" "}
                  {/* Add padding to each slide for spacing */}
                  <Card
                    sx={{
                      height: 400, // Fixed height for each card
                      border: "1px solid gray",
                      display: "flex",
                      flexDirection: "column",
                      margin: "0 10px",
                      boxShadow: "7px 10px 5px -7px rgba(0,0,0,0.3)",
                      justifyContent: "space-between",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Link to={course.link} style={{ textDecoration: "none" }}>
                      <CardMedia
                        component="img"
                        image={course.image}
                        alt={course.title}
                        sx={{
                          height: 200, // Fixed height for image
                          objectFit: "cover",
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          fontWeight="bold"
                          gutterBottom
                        >
                          {course.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {course.description}
                        </Typography>
                      </CardContent>
                    </Link>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Container>
        </Box>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button onClick={handleExploreButton} variant="contained">
          Explore more
        </Button>
      </Grid>
    </Grid>
  );
}
