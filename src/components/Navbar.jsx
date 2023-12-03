import { AppBar, Avatar, Box, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar({hotels = [], setHotels, originalHotels = []}) {
  const navigate = useNavigate();
  const [searchValue,setSearchValue] = useState('')

const handleSearch=()=>{
    const filterHotels = hotels.filter((hotel)=>
  hotel.address.toLowerCase().includes(searchValue.toLowerCase())||
  hotel.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  setHotels(filterHotels);
}



  return (
    <>
      <AppBar position='sticky' color='inherit'>
        <Toolbar sx={{
          display:'flex',
          justifyContent: 'space-between',
          alignItems: "center"
        }}>
            <Typography onClick={()=>navigate('/')} sx={{cursor: 'pointer'}} variant='h5' color="black" fontWeight="bold">BookStay </Typography>
            <Box sx={{display: "flex", gap: '20px', alignItems: "center"}}>
              {originalHotels.length > 0 && (
              <>
              <TextField
              value={searchValue} 
              onChange={(e)=>{
                setSearchValue(e.target.value)
                if(e.target.value === ""){
                  setHotels(originalHotels)}
              }}
              size='small' 
              label="Search hotels" 
              variant="outlined" 
              InputProps={{
                endAdornment: (
                  <IconButton 
                    disabled={!searchValue}
                    onClick={()=>handleSearch()}>
                    <SearchOutlinedIcon/>
                  </IconButton>
                ),
              }}
              />
              </>
              )}
            <Typography sx={{cursor: 'pointer'}} onclick={()=> navigate('/')} fontSize='16px' color="black" fontWeight="bold">Home</Typography>
            <IconButton>
            <Avatar sx={{width: 32, height: 32}}>H</Avatar>
            </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
