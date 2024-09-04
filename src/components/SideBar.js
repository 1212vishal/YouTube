import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen=useSelector((store) => store.app.isMenuOpen)

if(!isMenuOpen)
    return null;

  return (
    <div className='bg-zinc-300 h-100 w-40'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subsscriptoin</li>
        </ul>
        <h1 className='font-bold mt-2'>You</h1>
        <ul>
            <li>Your Channel</li>
            <li>History</li>
            <li>Your Videos</li>
        </ul>
        <h1 className='font-bold mt-2'> Subscription</h1>
        <ul>
            <li>Watch Later</li>
            <li>Liked Videos</li>
            <li>Your Clips</li>
        </ul>
        <h1 className='font-bold mt-2'> Subscription</h1>
        <ul>
            <li>Watch Later</li>
            <li>Liked Videos</li>
            <li>Your Clips</li>
        </ul>
        <h1 className='font-bold mt-2'> Subscription</h1>
        <ul>
            <li>Watch Later</li>
            <li>Liked Videos</li>
            <li>Your Clips</li>
        </ul>
        <h1 className='font-bold mt-2'> Subscription</h1>
        <ul>
            <li>Watch Later</li>
            <li>Liked Videos</li>
            <li>Your Clips</li>
        </ul>
    
    </div>
  )
}

export default SideBar