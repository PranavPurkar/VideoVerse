import React from 'react'

const Chatmessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className='h-10 rounded-lg'
            alt='user logo'
            src='https://t3.ftcdn.net/jpg/05/69/25/02/360_F_569250223_uJcLjVq4WJA7tdILnkEgKDA0qIZZFONl.jpg'
        />
        <span className='font-bold px-2'>{name}:</span>
        <span>{message}</span>
    </div>
  )
}

export default Chatmessage