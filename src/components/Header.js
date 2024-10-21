import React from 'react'
//   import logo from "images/icons8-developer-64.png"
import { HiMail,HiMenuAlt2,HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
 import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {

        //  Header components
    const [showMenuList, setShowMenuList] = useState(false);

    const showMenu = () => {
      setShowMenuList(!showMenuList);
    };

  return (
    
     <header className='bg-gold shadow-md h-16 bg-slate-100 dark:bg-slate-700 flex justify-between items-center tablet:py-5 sticky top-0'>
    
    <div className='text-xl text-yellow-700 font-logoFont tablet:text-2xl laptop:text-3xl mt-5'>
     Abass
    </div>
        
      <ul className='hidden tablet:flex w-full justify-end mr-10 space-x-2 mt-5'>
      <li>
         <a href="mailto:labassgbolahan@gmail.com">  <HiMail className='text-emerald-400 dark:text-white'/></a>
      </li>
      <li>
         <a href="https://github.com/Lamidi1">  <FaGithub className='text-emerald-400 dark:text-white'/></a>
      </li>
      <li>
         <a href="https://www.linkedin.com/in/lamidi-gbolahan-abass-578808151">  <FaLinkedin className='text-emerald-400 dark:text-white'/></a>
      </li>
      </ul>

     
         
         <span>
         {showMenuList ? (
            <HiX onClick={showMenu} className = " shadow-md  h-8 w-8 rounded-md" />
          ) : (
            <HiMenuAlt2 onClick={showMenu} className = "tablet:hidden mt-5 shadow-md rounded-md h-8 w-8 " />
          )}
         </span>
            
            {/* Navigation styling */}
     <ul className='  mt-5  hidden tablet:flex desktop:flex'>
        <li className='mr-4 px-3 hover:text-emerald-400'><Link to='/'>Home</Link> </li>

        <li className='mr-4 px-3'><Link to='/about'>About</Link></li>

        <li className='mr-4 px-3'><Link to='/projects'>Projects</Link></li>

        <li className='mr-4 px-3'> <Link to='/skills'>Skills</Link> </li>

        <li className='mr-4 px-3'> <Link to='/contact'>Contact</Link> </li>
       </ul>
      
       {/* <a href='/lamidi Abass Resume.pdf' download={true} className='mt-5  items-center justify-center py-1  w-32  rounded-sm  bg-emerald-300 hidden tablet:block laptop:block'>
        
        Resume</a> */}


        {showMenuList ? (
          <ul className='w-screen h-[90vh]  py-10 flex flex-col items-center bg-[#dfddddcb] rounded-b-lg shadow-md shadow-black fixed right-0 top-[10vh] z-20'>
           <li className='text-xl my-3 px-5 font-bold hover:border-r-2 hover:border-b-2 hover:shadow-md rounded-md'><Link to='/'>Home</Link> </li>
           <li className='text-xl my-3 px-5 font-bold hover:border-r-2 hover:border-b-2 hover:shadow-md rounded-md'><Link to='/about'>About</Link> </li>
           <li className='text-xl my-3 px-5 font-bold hover:border-r-2 hover:border-b-2 hover:shadow-md rounded-md'><Link to='/projects'>Projects</Link> </li>
           <li className='text-xl my-3 px-5 font-bold hover:border-r-2 hover:border-b-2 hover:shadow-md rounded-md'><Link to='/skills'>Skills</Link> </li>
           <li className='text-xl my-3 px-5 font-bold hover:border-r-2 hover:border-b-2 hover:shadow-md rounded-md'><Link to='/contact'>Contact</Link> </li>

          </ul>
    
       ): null }


     </header>
  );
};


export default Header;
