import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import workout from "../assets/workout.json";

import Lottie from "lottie-react";

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#0C2D48" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" color="#0C2D48">
      Get fit  & <br />
      and keep it Fun
    </Typography>
    
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#0C2D48', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}  className= "hoverEff">Explore Exercises</a>
    </Stack>
    <Typography fontWeight={700} color="#0C2D48" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      STAY FIT
    </Typography>
  
 
    <Lottie animationData = {workout}  className="hero-banner-img" />
  </Box>
);

export default HeroBanner;