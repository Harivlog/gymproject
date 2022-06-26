import { Box } from '@mui/material'
import React, { useState } from 'react'
import SearchExercises from './SearchExercises'
import Exercises from './Exexcises'
import HeroBanner from './HeroBanner'
const Home = () => {
  const [BodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={BodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={BodyPart}
      />
      
    </Box>
  )
}

export default Home