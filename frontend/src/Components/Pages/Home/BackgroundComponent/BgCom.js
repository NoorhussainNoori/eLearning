import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "./../../../../assets/Landing.jpg";

const BgCom = () => {
  return (
    <Container>
      <Box position={"relative"}>
        <Box position={"absolute"}>
          <Box component={"img"} src={img} width={"100%"} borderRadius={2} />
        </Box>
        <Box position={"relative"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"400px"}
            sx={{
              color: "white",
              height: "50vh",
              textAlign: "center",
            }}
          >
            <Typography variant="h2">Welcome to E-Learning</Typography>
            <Typography variant="p">
              All the Courses are completely Free
            </Typography>
            <Box marginTop={2}>
              <Grid container spacing={2}>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                  <Button variant="contained">Explore</Button>
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                  <Button variant="outlined">Login</Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default BgCom;
