import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import {  useQuery} from 'react-query';
import { getHotelBySlug } from '../api/request';
import Navbar from '../components/Navbar';
import { Box, Button, Container, ListItem, Typography } from '@mui/material';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Gallery from '../components/Gallery';
import { BookingModal } from '../components/BookingModal';



export default function HotelInfo() {
  const [open, setOpen] = useState(false);
 const {slug} = useParams();
//  console.log(slug);
 const fetchHotelData = async() => {
  const {data} = await getHotelBySlug(slug);
  console.log('slug data', data);
  return data;
 }
 const handleOpen = ()=>setOpen(true);
 const handleClose = ()=>setOpen(false);

 const {isLoading, data} = useQuery('hotel-slug', fetchHotelData);
  return (
    <>
    <Navbar />
    {isLoading ?(<LoadingSkeleton/>):(
      <Container maxWidth='lg'>
      <Typography variant='h6'marginY={3} fontWeight='bold'>{data?.name}</Typography>
      <Gallery images={data?.images}/>
      <Box sx={{marginY: '1', display: 'flex',}}>
      {data?.rooms.map((room)=>(
        <Typography key={room.id} sx={{margin: '5px 20px 5px 0'}} variant='h6'color='gray'>{room.content}</Typography>
      ))}
      </Box>
      <Typography variant='p'marginY={3} fontWeight='bold' lineHeight="1.5" >{data?.aboutThePlace}</Typography>
      <Typography variant='h5'marginY={3} fontWeight='bold'>What this place offers!!!</Typography>
      <Box sx={{marginY: '3', display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{maxWidth: '70% '}}>
            {data?.features.map((feature)=>(
              <ListItem key={feature.id}>{feature.text}</ListItem>
            ))}
          </Box>
          <Button onClick={handleOpen} variant='outlined'>Reserve</Button>
      </Box>
      <BookingModal data={data} open={open} handleClose={handleClose}/>
    </Container>
    )}
    
    </>
  )
}
