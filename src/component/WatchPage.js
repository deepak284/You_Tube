import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(()=> {dispatch(closeMenu())}
  ,[dispatch])



  return (
    <div className='px-5 w-full'>
      <div className='flex'>
      <div className='w-full max-w-screen-lg'>
      <iframe width="100%" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className='w-full p-2 max-w-md'>
      <LiveChat/>
    </div>
      </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage;
