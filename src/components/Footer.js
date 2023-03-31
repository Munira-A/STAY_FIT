import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo00.svg';

const Footer = () => (
  <Box mt="50px" bgcolor="#0C2D48">
    <Stack  sx={{ alignItems: 'center' }} flexWrap="wrap" px="20px" pt="20px">
      <Typography  sx={{ fontSize: { lg: '20px', xs: '18px' } }} mt="10px" color="#ffffff" textAlign="center" pb="10px"> STAY FIT</Typography>
      <img src={Logo} alt="logo" style={{ width: '40px', height: '40px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '14px' } }} mt="20px" color="#ffffff" textAlign="center" pb="40px">Made by Munira, with the help of JavaScript Mastery</Typography>
  </Box>
);

export default Footer;