import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const List = ['ALL','Music','IIT','GATE','CSE','Rocket','Art','Gaming','Lectures','DSA']
  return (
    <div className='flex text-sm ' >
      {List.map((item) => <Button key={item} name={item} />)}
      </div>
  )
}

export default ButtonList