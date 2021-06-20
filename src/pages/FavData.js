import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import FavCard from './FavCard';

const FavData = () => {
    const posts = useSelector((state) => state.data.favdata);
    // console.log(posts)
    //rating is in sorted order
    posts.sort((a,b)=> b.value-a.value)

    return (
      <div style={{marginTop:'100px'}}>
        <Typography component="h6" variant="h6">
          Ratings(Top Rated to Low Rated)
        </Typography>
        <Grid container alignItems="stretch" spacing={3}>
        {posts.length===0?<div style={{marginLeft:'12px', marginTop:'25px'}}>please rate our quotes...</div>:posts.map((element,index) => {
        return <Grid key={index} item xs={12} sm={6} md={6}>
                 <FavCard element={element} index={index} />
              </Grid>
        })}
      </Grid>
      </div>
    )
}

export default FavData
