import React, { useState } from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

// Social Icons as functional components
function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Footer() {
  const menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 1, name: "Course", link: "/courses" },
    { id: 1, name: "FAQs", link: "/faqs" },
    { id: 1, name: "Sign-in", link: "/signin" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box component="footer" sx={{ backgroundColor: "#1E90FF", py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Social Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Social
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="#" color="inherit">
                <FacebookIcon width={24} height={24} />
              </Link>
              <Link href="#" color="inherit">
                <TwitterIcon width={24} height={24} />
              </Link>
              <Link href="#" color="inherit">
                <InstagramIcon width={24} height={24} />
              </Link>
              <Link href="#" color="inherit">
                <LinkedinIcon width={24} height={24} />
              </Link>
            </Box>
          </Grid>

          {/* Pages Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Pages
            </Typography>
            <Box sx={{ display: "grid", gap: 1 }}>
              {menu.map((menu) => {
                return (
                  <Link
                    to={menu.link}
                    style={{
                      color: isHovered ? "#111" : "#eee",
                      textDecoration: "none",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menu.name}
                  </Link>
                );
              })}
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: "grid", gap: 1 }}>
              <Typography color="white">
                123 Main Street, Anytown USA
              </Typography>
              <Typography color="white">Phone: (123) 456-7890</Typography>
              <Typography color="white">WhatsApp: (123) 456-7890</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Typography variant="body2" color="white" align="center" sx={{ mt: 4 }}>
          Created by Noor Hussain Noori. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
