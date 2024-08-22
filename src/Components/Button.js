import React from 'react'

const Button = ({name}) => {
  return (
    <div >
        <button className='px-8 m-5 bg-gray-300 text-black rounded-lg'>{name}</button>
    </div>
  )
}

export default Button