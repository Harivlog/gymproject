import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions , fetchData } from '../utils/fetchData'
import HorizontalBar from './HorizontalBar'

const SearchExercises = ({setExercises, bodyPart , setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])
 
  useEffect(() => {
    const fetchExercisesData = async ()=>{
      const bodyPartsData = await  fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
      console.log("haris")
    }
  console.log(  fetchExercisesData()  )
  }, [])
  
  const hundleInput = async()=>{
    
    if(search){
     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      console.log(exercisesData)
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      setSearch('')
      setExercises(searchedExercises);      
  }
  }
  return (
    <div>
      <Button></Button>
      <Stack alignitem="center" mt="37px"
      justifyContent="center" span="20px">

      <Typography fontWeight={700} sx={{FontSize : {lg:'44px', xs:'30px'}}} mb="50px" textAlign="center">
        Aweosome Exercises You <br/>
        Should know
      </Typography>

      <Box position="relative" mb="72px">
        
        <TextField
          sx={{input : 
            {fontWeight : '700',
            border : 'none' ,
            borderRadius: '4px'
          },
          width: {lg : '800px',
          xs: '350px'
        }
        
      }}
      height="76px"
      value={search}
      onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        
         placeholder="Search Exercises"
         type='text'/>
         <Button className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color:'#fff',
            TextTransform : 'none',
            width :{lg: '175px', xs: '80px'},
            fontSize :{lg: '20px', xs: '14px'},
            height : '56px',
            position :'absolute', 
            right : '0'
          }}
          onClick={hundleInput}
          >Search</Button>
      </Box>
      <Box sx={{position :'relative' , width: '100%', p : '20px'}}>
        <HorizontalBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
      </Stack>
    </div>
  )
}

export default SearchExercises

