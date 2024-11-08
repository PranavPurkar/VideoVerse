import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { VIDEO_VERSE_LOGO, YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'
import { Link } from 'react-router-dom'

const Header = () => {

   const [searchQuery,setsearchQuery] = useState("");
   const [suggestions,setSuggestions] = useState([]);
   const [showsuggestions,setShowsuggestions] = useState(false);
   const dispatch = useDispatch();

   const searchCache = useSelector((store) => store.search);

   useEffect(() => {
      const timer = setTimeout(()=>
      {
        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
        }
        else{
          getSearchSuggestions();
        }
      }, 200);

      return () => {
        clearTimeout(timer);
      }
   },[searchQuery]);

   const getSearchSuggestions = async () => {
     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
     const json = await data.json();
    //  console.log(json[1]);
    setSuggestions(json[1]);

      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        }));
   };
  const toggleMenuHandler = () => {
     dispatch(toggleMenu());
  }


  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
       <div className='flex col-span-1'>
            <img className='h-12  cursor-pointer' onClick={() => toggleMenuHandler()}
            alt='menu logo'  
            src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small_2x/bullet-menu-icon-free-vector.jpg"
            />
             <a href="/"><img className='h-16 -mt-2 cursor-pointer' 
            alt="logo" 
            src= {VIDEO_VERSE_LOGO}
           /></a>
        </div>
        <div className='col-span-10 mt-4'>
          <div>
             <input 
             className='w-1/2 px-36 py-1 border border-black rounded-l-full' 
             type="text" 
             value={searchQuery}
             onChange={(e) => setsearchQuery(e.target.value)}
             onFocus={() => setShowsuggestions(true)}
             onBlur={() => setShowsuggestions(false)}
             placeholder="which video do you want to watch?"
             />
             <button className='hover:bg-green-300 border border-black rounded-r-full px-4 py-1 bg-gray-200 text-black '>🔍</button>
            </div>
            {showsuggestions && (
             <div className='absolute bg-white py-2 px-2 w-[36rem] shadow-lg rounded-lg border border-gray-200 '>
                <ul>
                  {suggestions.map((s) =><li className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍{s}</li>)}
                </ul>
            </div>)}
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