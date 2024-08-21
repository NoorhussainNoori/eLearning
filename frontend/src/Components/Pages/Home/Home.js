import { Container, Grid } from '@mui/material'
import React from 'react'
import BgCom from './BackgroundComponent/BgCom'

const Home = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <BgCom />
        </Grid>
        
      </Grid>
    </Container>
  )
}

export default Home