import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const op1 = '{';
const op2 = '}';

const HeroBanner = () => (

  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="30px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, <Box component="div" sx={{display : 'inline'}} color="#FF2625"> {op1} </Box> Smile <Box component="div" sx={{display : 'inline'}} color="#FF2625"> {op2} </Box> <br />
      And Repeat
    </Typography>
    <Typography fontSize="25px" fontFamily="Alegreya" lineHeight="35px">
      "I yam what I yam an' tha's all I yam"
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }} >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{marginTop:'-250px', borderRadius:'200px'}}/>
  </Box>
);

export default HeroBanner;
