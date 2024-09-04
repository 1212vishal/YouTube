import React, { useEffect, useState } from 'react'
import { YOU_VIDEOS_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [video, setvideo]=useState([]);

  useEffect(()=>{
    getVideos();
  },[])
  
  const getVideos=async ()=>{
           const data=await fetch(YOU_VIDEOS_API);
           const json=await data.json();
           //console.log(json);
           setvideo(json.items);
  }
  
  return (
    <div className='flex flex-wrap'>
      {video.map((t)=>(<Link to={"/watch?v=" + t.id}> <VideoCard key={t.id} info={t} /> </Link>))} 
    </div>
  )
}

export default VideoContainer