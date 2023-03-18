import React, { useEffect, useState } from 'react'
import Logo from "../Images/logo.png"
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/const'
// import {Link} from  "react-router-dom";
import {FaSearch} from "react-icons/fa"
import { cacheResults } from '../utils/searchSlice'

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestion,setShowSuggestions] = useState(false);

  const searchCache = useSelector(store=> store.search)

  const dispatch = useDispatch();
  
  useEffect(()=> {
    // console.log(searchQuery);
   const timer = setTimeout(()=>{
   if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
   } else {
    getSearchSuggestions()
   }
   }, 3000);

  

   return () => {
    clearTimeout(timer);
  };

  },[searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log("API call -" + searchQuery)
    setSuggestions(json[1]);
    
    // update cache
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }));
  }
   


  const toggleMenuHandler = () => {dispatch(toggleMenu())}

  return (
    <div className='grid grid-flow-col py-3 px-3'>
    <div className='flex col-span-1'>
    <img className='h-8 cursor-pointer' 
    onClick={()=> toggleMenuHandler()}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30Gcy3-zix_Lv2aSksnA2dJXgZb8OV6bfwg&usqp=CAU" alt="menu" />
    <a href="/"><img className='h-8' src={Logo} alt="Logo" /></a>
    </div>
      <div className='col-span-10 max-w-[500px] mx-auto'>
        <div className='flex'>
             <input type="text" className='p-2 w-96 border border-gray-600 rounded-l-md ' value={searchQuery} 
             onChange = {(e)=> setSearchQuery(e.target.value)}
             onFocus = {()=> setShowSuggestions(true)}
             onBlur = {()=> setShowSuggestions(false)}
              />
             <button className='border-gray-400 border rounded-r-md p-2 bg-gray-100'><FaSearch className='text-gray'/></button>
             </div>
           {showSuggestion && (
            <div className='fixed bg-white rounded py-2 px-5 w-[24rem]'>
            <ul>
              {suggestions.map((s)=> <li key={s} className='flex items-center shadow-sm'><FaSearch className='mr-2'/>{s}</li>)}
            </ul>
            </div> 
           )}   
      </div>
      <div className='col-span-1'>
        <img className='h-8 ml-auto' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
      </div>
    </div>
  )
}

export default Head
