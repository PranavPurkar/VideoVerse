import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-12 '
            alt='menu logo' 
            src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small_2x/bullet-menu-icon-free-vector.jpg"
            />
            <img className='h-16 -mt-2'
            alt="logo" 
            src="https://www.finsmes.com/wp-content/uploads/2022/04/Videoverse-Logo_Final-09.jpeg"
            />
        </div>
        <div className='col-span-10 mt-4'>
             <input className='w-1/2 px-36 py-1 border border-black rounded-l-full' type="text" placeholder="which video do you want to watch?"/>
             <button className='border border-black rounded-r-full px-4 py-1 bg-gray-200 text-black '>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='h-14 rounded-lg'
            alt='user logo'
            src='https://t3.ftcdn.net/jpg/05/69/25/02/360_F_569250223_uJcLjVq4WJA7tdILnkEgKDA0qIZZFONl.jpg'
            />
            </div>
    </div>
  )
}

export default Header