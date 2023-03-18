import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;


  return (
    <div className='p-2 m-2 w-60 shadow-lg'>
        <img src={thumbnails.medium.url} alt="thumbnails" />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
        check
    </div>
  )
}

export default VideoCard;
