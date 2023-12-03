import { Grid } from '@mui/material'
import React from 'react'


export default function Gallery({images}) {
  return (
    <>
        <Grid container spacing={1}>
            {images?.map((image)=>(
                <Grid item xs={12} sm={6} md={4} key={image.id}>
                    <img src={image?.img} alt="hotels" style={{width: '100%', height:'100%', objectFit: 'cover'}} />
                </Grid>
            ))}
        </Grid>
    </>
  )
}
