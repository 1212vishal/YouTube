import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {statistics, snippet}= info;
    const {thumbnails, channelTitle, title}=snippet

  return (
    <div className='w-52 shadow-2xl rounded-lg p-2 m-2'>
        <img alt="Thumbnails" src={thumbnails.high.url}></img>
        <ul>
            <li className='font-bold'>
                {channelTitle}
            </li>
            <li className='text-wrap'>
                {title}
            </li>
            <li className='font-bold'>
                {statistics.viewCount} Views
            </li>
        </ul>
    </div>
  )
}

export default VideoCard