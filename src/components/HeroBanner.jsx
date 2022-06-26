import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px' , xs : '70px'},
      ml: { sm : '50px'}
    }} position="relative" p="20px">

      <Typography color="#FF2625" fontWeight="600"
      fontSize="26px">
        Fitness Club
        <Stack></Stack>
      </Typography>
      <Typography fontWeight={700} sx={{fontSize : {lg: '44px' ,xs: '40px'}}}>Sweat, Smile <br/> and Repeat</Typography>
      <Typography fontSize="22px" mb={4} lineheight="35px" >Check out the most effective exersises</Typography>
       <Button variant="contained" color="error">Explore Exercises</Button>
       <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
       <Typography fontWeight={600} color="#ff2625" sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}} } fontSize="200px">Exercises</Typography>
   </Box>
  )
}

export default HeroBanner