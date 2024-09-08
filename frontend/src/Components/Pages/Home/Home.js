import { Container, Grid } from "@mui/material";
import React from "react";
import BgCom from "./BackgroundComponent/BgCom";
import Recommended from "./Recommended/Recommended";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <BgCom />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Recommended />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Testimonials />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
