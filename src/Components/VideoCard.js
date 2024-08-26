import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
      <img src={thumbnails.medium.url} alt='thumbnail' className='rounded-lg'/>
      <ul> 
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li className='font-bold'>{statistics.viewCount} 👁️</li>
      </ul>
    </div>
  )
}

export default VideoCard