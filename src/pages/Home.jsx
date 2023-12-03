import React, { useState } from 'react'
import { getHotels } from '../api/request';
import { useQuery} from 'react-query';
import LoadingSkeleton from '../components/LoadingSkeleton';
import  Navbar from '../components/Navbar';
import HotelCard from '../components/HotelCard';
import { Container, Grid, Pagination } from '@mui/material';


export default function Home() {
    const [hotels,setHotels] = useState([]);
    const [filterHotels,setFilterHotels] = useState([]);
    const [page,setPage] = useState(1);
    const hotelLimitPerPage = 9;

  
    const fetchHotels = async()=>{
        const {data} = await getHotels();
        // console.log('hotel-->', data);
        setHotels(data);
        setFilterHotels(data);
        
        return data;
    }
    // useQuery is a react hook that accepts a key and function
    // the key is used to cache the data and fucntion used to fetch the data
    const {isLoading} = useQuery('hotels',fetchHotels);
    const startIndex = (page - 1)*hotelLimitPerPage;
    const endIndex = (page*hotelLimitPerPage)-1;
    const paginatedHotels= filterHotels.slice(startIndex,endIndex + 1);
    const totalHotels = filterHotels.length;
    const totalPages = Math.ceil(totalHotels/hotelLimitPerPage);
  return isLoading ? (<LoadingSkeleton/>) : (
    <>
        <Navbar hotels={filterHotels} setHotels={setFilterHotels} originalHotels={hotels}/>
        <Container maxWidth='lg'>
        <Grid container spacing={2} sx={{padding: 2}}>
        {paginatedHotels.length > 0 ? <>
          {paginatedHotels.map((hotel)=>(
          <Grid item xs={12} sm={6} md={4} lg={4} key={hotel.id}>
            <HotelCard key={hotel.id} hotel={hotel}/>
          </Grid>
        ))}
        </> : (<h2>Not found Hotel</h2>)}
        </Grid>
        <Pagination 
          count={totalPages}
          page={page}
          onChange={(event,value)=>setPage(value)}
          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        />
      </Container> 
    </>
  )
    
    
  
}
