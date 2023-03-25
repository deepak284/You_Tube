import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage'
import {generateRandomName,generateRandomMessage} from '../utils/helper'

const LiveChat = () => {


    const [liveMessage, setLiveMessage] = useState("");


   const dispatch = useDispatch();

   const ChatMessages = useSelector((store)=> store.chat.messages);

    useEffect(()=> {

        const i = setInterval(()=> {
            // API Polling

           dispatch(
            addMessage({
                   name: generateRandomName(),
                   message: generateRandomMessage(20),
            })
           )

        }, 500);
         
        return ()=> clearInterval(i);
    }, []);


  return (
    <>
    <div className='overflow-y-scroll w-full h-[600px] p-3 border border-black bg-slate-100 rounded-lg flex flex-col-reverse'>
    {ChatMessages.map((c,i)=> <ChatMessage key={i} name={c.name} message={c.message}/>)}
    </div>
    <form className='w-full p-2 ml-2 border border-black'
     onSubmit={(e)=> { e.preventDefault();
                       dispatch(
                        addMessage({   
                            name:"Deepak Sharma",
                            message: liveMessage,
                          })
                       );
                       setLiveMessage("");
     }}>
            <input type="text" className='w-96 border border-gray px-2' value={liveMessage} onChange={(e)=> {setLiveMessage(e.target.value)}} />
            <button className='px-2 mx-2 bg-green-500' >Send</button>
    </form>
    </>
  )
}

export default LiveChat