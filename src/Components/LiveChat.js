import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
 
  const [LiveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatmessages = useSelector((store)=> store.chat.messages);

  useEffect(() => {  
      const i = setInterval(() => {
        console.log("API POLLING");

        dispatch(
          addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20)+'🙂'
        }));
    },2000);

    return () => clearInterval(i);
  }, [])

  return (
    <>
    <div className='w-full h-[500px] ml-2  p-2 border border-black rounded-t-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
       {/* Dont use index as keys */}
        {chatmessages.map((m,i) => (
            <Chatmessage key={i} name={m.name} message={m.message}/>
        ))}
    </div>
    <form className='w-full ml-2 p-2 border border-black rounded-b-lg' 
    onSubmit={(e)=> {
      e.preventDefault();
      dispatch(addMessage({name:'Pranav',message:LiveMessage}))  
      setLiveMessage('');
    }}>
      <input  className='w-96 p-2' type="text" placeholder='Enter message' value={LiveMessage} onChange={(e)=> setLiveMessage(e.target.value)} />
      <button className='px-4 mx-2 bg-green-100 rounded-lg'>🚀</button>
    </form>
    </>
  )
}

export default LiveChat