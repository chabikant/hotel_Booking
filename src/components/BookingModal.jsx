import { Box, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from '@mui/material'
import React, { useState } from 'react';
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export function BookingModal({data, open, handleClose}) {

const [selectCount, setSelectedCount] = useState(2);
const getGuests = ()=>{
    return Number(data?.rooms[0].content.split(' ')[0])
}

  return (
    <>
    <Modal open={open} onClose={handleClose}>
        <Box sx={{
            width: '29%',
            top: '100%',
            left: '50%',
            margin: 'auto',
            bgcolor: 'white',
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
            borderRadius: '5px',
            padding: 3
        }}>
            <Typography>${data?.pricePerNight}/ night</Typography>
            <FormControl fullWidth sx={{margin: '20px 0'}}>
                <InputLabel margin='auto'>Number of Guests</InputLabel>
                <Select label="Number of Guests" value={selectCount} onChange={(e)=>setSelectedCount(e.target.value)}>
                {[...Array(getGuests())].map((guest, index)=>(
                    <MenuItem value={index}>{index + 1}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Typography variant='h6' fontWeight={'bold'} color={'gray'}>Select Dates</Typography>
            <DateRange sx={{alignContent:'center'}}/>
        </Box>
    </Modal>
    </>
  )
}

