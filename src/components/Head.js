import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler=()=>{
         dispatch(toggleMenu());
    };


  return (
    <div className='grid grid-flow-col shadow-lg p-3 m-3'>
        <div className='grid-cols-1 flex'>
            <img onClick={()=>toggleMenuHandler()} className="h-8 px-3 cursor-pointer" alt="menu" src="https://pngbasket.com/wp-content/uploads/2021/08/Hamberg-icon-1.png"/>
            <img  className="h-8 px-4" alt="logo" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"/>
        </div>
        <div className='grid-cols-12 h-8'>
            <input className='border border-gray-500 w-96 rounded-l-xl' type='text'/>
            <button className='border border-gray-500 rounded-r-xl'>🔍</button>
        </div>
        <div className='grid-cols-1'>
            <img className="h-8 right-0" alt="profile-icon" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"/>
        </div>
    </div>
  )
}

export default Head