import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import icon from '../assets/icons/gym.png'
const BodyPart = ({item , setBodyPart , bodyPart}) => {
  return (
    <div>
        <Box>
            <Stack 
            type="button"
            alignitem="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                  justifyContent : 'center',
                  alignItems : 'center',
                  borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                  backgroundColor: '#fff',
                  borderBottomLeftRadius: '20px',
                  width : '270px',
                  height : '200px',
                  cursor : 'pointer',
                  gap : '47px'
                } }
                onClick={()=>{
                  setBodyPart(item)
                  window.scrollTo({top:1800, left : 100, behavior : 'smooth'})
                }}
            >
                <img src={icon} alt="dumbbell" style={{width:'40px', height : '40px' }}/>
                <Typography fontSize="24px" fontWeight="bold"
                textTransform="capitalize">{item}</Typography>
                </Stack>
        </Box>
    </div>
  )
}

export default BodyPart