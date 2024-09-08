import React, { useState, useMemo } from "react";
import { Grid, Box, Pagination, Container } from "@mui/material";
import SearchBar from "./Searchbar/SearchBar";
import FilterAccordion from "./FilterAccordion/FilterAccordion";
import CourseGrid from "./CourseGrid/CourseGrid";

export default function CourseComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    priceRange: { min: 0, max: 1000 },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);

  const [courses] = useState([
    {
      id: 1,
      title: "Introduction to Web Development",
      category: "Web Development",
      price: 99.99,
      description:
        "Learn the fundamentals of web development. This course covers HTML, CSS, and JavaScript, as well as the basics of web design and responsive web development.",
    },
    {
      id: 2,
      title: "Advanced React.js",
      category: "Web Development",
      price: 199.99,
      description:
        "Dive deep into React.js and build complex applications. This course covers advanced topics such as state management, routing, and server-side rendering.",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      category: "Computer Science",
      price: 149.99,
      description:
        "Mastering data structures and algorithms. This course covers the fundamental data structures and algorithms used in computer science, and how to implement them in code.",
    },
    {
      id: 4,
      title: "Machine Learning for Beginners",
      category: "Artificial Intelligence",
      price: 129.99,
      description:
        "Explore the world of machine learning. This course covers the basics of machine learning, including supervised and unsupervised learning, and how to build simple machine learning models.",
    },
    {
      id: 5,
      title: "Digital Marketing Essentials",
      category: "Marketing",
      price: 89.99,
      description:
        "Develop a strong digital marketing strategy. This course covers the fundamentals of digital marketing, including search engine optimization, social media marketing, and email marketing.",
    },
    {
      id: 6,
      title: "Mastering Python",
      category: "Programming",
      price: 179.99,
      description:
        "Become a Python programming expert. This course covers the Python programming language in depth, including advanced topics such as object-oriented programming and data analysis.",
    },
    {
      id: 7,
      title: "Graphic Design Fundamentals",
      category: "Design",
      price: 99.99,
      description:
        "Learn the basics of graphic design. This course covers the principles of design, color theory, typography, and how to use design software like Adobe Photoshop and Illustrator.",
    },
    {
      id: 8,
      title: "Project Management Certification",
      category: "Business",
      price: 249.99,
      description:
        "Earn a project management certification. This course covers the fundamentals of project management, including project planning, scheduling, and risk management.",
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const { category, priceRange } = filters;
      return (
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category.length === 0 || category.includes(course.category)) &&
        course.price >= priceRange.min &&
        course.price <= priceRange.max
      );
    });
  }, [courses, searchTerm, filters]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <Box sx={{ py: 4 }} height={'80vh'}>
        {/* SearchBar Component */}
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

        <Grid container spacing={4}>
          {/* FilterAccordion Component */}
          <Grid item xs={12} md={3}>
            <FilterAccordion
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
          </Grid>

          {/* CourseGrid Component */}
          <Grid item xs={12} md={9}>
            <CourseGrid courses={currentCourses} />
            <Box display="flex" justifyContent="center" mt={4}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
