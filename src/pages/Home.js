import { useEffect, useState } from 'react';
import { fetchdata } from '../actions/fetchdata';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import SingleCard from './SingleCard';
import InfiniteScroll from 'react-infinite-scroll-component';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata())
  }, [dispatch])
  
  const posts = useSelector((state) => state.data.apidata);
  const favposts = useSelector((state) => state.data.similarity);
  const [count, setCount] = useState({
    prev: 0,
    next: 14
  })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState([])
  const [simcurrent, setsimCurrent] = useState([])
  useEffect(() => {
    setCurrent(posts?.slice(0, 14))
  }, [posts])
  useEffect(() => {
    setsimCurrent(favposts?.slice(0, 14))
  }, [favposts])
  const getMoreData = () => {
    if (current.length === posts.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
        setCurrent(current?.concat(posts.slice(count.prev + 14, count.next + 14)))
        setsimCurrent(simcurrent?.concat(favposts.slice(count.prev + 14, count.next + 14))) 
    }, 1000)
    setCount((prevState) => ({ prev: prevState.prev + 14, next: prevState.next + 14 }))
  }

  return (
    <div style={{marginTop:'80px'}}>
    {posts!==null ?
    <InfiniteScroll
    dataLength={current===undefined?14:current?.length}
    next={getMoreData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    >
    <Grid container alignItems="stretch">
    {favposts===null ? current?.map((element,index) => (
          <Grid key={index} item xs={12} sm={6} md={6} style={{paddingRight:'10px'}}>
             <SingleCard element={element} index={index} />
          </Grid>
    )):
    simcurrent?.map((element,index) => (
      <Grid key={index} item xs={12} sm={6} md={6} style={{paddingRight:'10px'}}>
         <SingleCard element={element.objval} index={index} />
      </Grid>
     ))
  }
  </Grid>
  </InfiniteScroll>
  : null}
  </div>
  );
}

export default Home
