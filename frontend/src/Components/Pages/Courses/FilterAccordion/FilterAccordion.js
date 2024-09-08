import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Typography,
  Input,
  Box,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterAccordion = ({ filters, handleFilterChange }) => {
  const categories = [
    "Web Development",
    "Computer Science",
    "Artificial Intelligence",
    "Marketing",
    "Programming",
    "Design",
    "Business",
  ];

  return (
    <Box>
      {/* Category Filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={filters.category.includes(category)}
                  onChange={() =>
                    handleFilterChange(
                      "category",
                      filters.category.includes(category)
                        ? filters.category.filter((c) => c !== category)
                        : [...filters.category, category]
                    )
                  }
                />
              }
              label={category}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Price Range Filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography>Min Price:</Typography>
            <Input
              type="number"
              value={filters.priceRange.min}
              onChange={(e) =>
                handleFilterChange("priceRange", {
                  min: Number(e.target.value),
                  max: filters.priceRange.max,
                })
              }
              sx={{ width: "60px" }}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Max Price:</Typography>
            <Input
              type="number"
              value={filters.priceRange.max}
              onChange={(e) =>
                handleFilterChange("priceRange", {
                  min: filters.priceRange.min,
                  max: Number(e.target.value),
                })
              }
              sx={{ width: "60px" }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterAccordion;
