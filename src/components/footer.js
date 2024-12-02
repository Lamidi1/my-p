import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    
  return (
    
    <footer className='bg-gray-700 text-white  w-full fixed -bottom-0'>
     
           <div className="flex flex-wrap justify-center text-xs gap-4">
           <li className='mr-4 px-3 hover:underline list-none '><Link to='/'>Home</Link></li>
           <li className='mr-4 px-3 hover:underline list-none'><Link to='/About'>About</Link></li>
           <li className='mr-4 px-3 hover underline list-none'><Link to='/Contact'>Contact</Link></li>
          </div>
              <div className=' flex-wrap mt-4'>
              <p className='text-center text-xs '>&copy;{new Date().getFullYear()} <span>All Rights Reserved By Abass</span></p>
              </div>
    </footer>
  )
}

export default Footer
