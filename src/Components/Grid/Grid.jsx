import React from 'react'
import style from'./Grid.module.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GridCard from './GridCard';
import GridImage1 from '../../Assets/GridImage1.png'
import GridImage2 from '../../Assets/GridImage2.png'

const ImageGrid = () => {
  return (
    
    <div className={style.wrapper}>
        <p className={style.choose}>Area of Practices</p>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
        <Grid item md={6}>
          <GridCard image={GridImage1} text='BUSINESS LAW'/>
        </Grid>
        <Grid item md={6}>
        <GridCard image={GridImage2} text='PARTNERSHIP LAW'/>
        </Grid>
        {/* <Grid item md={4}>
        <GridCard image={GridImage1} text='BUSINESS LAW'/>
        </Grid>
        <Grid item md={8}>
        <GridCard image={GridImage2} text='PARTNERSHIP LAW'/>
        </Grid> */}
      </Grid>
      </Box>

    </div>
  )
}

export default ImageGrid