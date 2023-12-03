import React from 'react'
import { Container, Grid, Skeleton} from '@mui/material';

export default function LoadingSkeleton() {
  return (
    <>
    <Skeleton animation='wave' variant='rectangle' width='100%' height={60}/>
    <Container maxWidth='lg'>
    <Grid maxWidth='lg'>
        <Grid container spacing={2} marginTop={3}>
            {[1,2,3,4,5,6,7,8,9].map((item, index)=>(
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Skeleton animation='wave' variant='rectangle' width='100%' height={300} />
                </Grid>
            ))}
        </Grid>
    </Grid>
    </Container>
    
    </>
  )
}
