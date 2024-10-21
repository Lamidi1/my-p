import React from 'react'
// import image1 from '../images/image1.jpg'
 import image3 from '../images/image3.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Header from './Header';
const Home = () => {

  return (
     <>

     <Header/>

   <section className='min-h-screen flex flex-col justify-start items-center text-center p-24'>
       <h1 className='text-red-500 text-5xl font-bold uppercase'>LAMIDI ABASS</h1>
        <h2 className='text-xl py-3'>Full Stack Developer</h2>
           

<ul className='flex justify-between space-x-5 py-2 tablet:py-4 laptop:w-1/3 rounded-full'>
      <li>
         <a href="mailto:labassgbolahan@gmail.com">  <HiMail className='text-emerald-400 dark:text-white h-7 w-7 '/></a>
      </li>
      <li>
         <a href="https://github.com/Lamidi1">  <FaGithub className='text-emerald-400 dark:text-white h-7 w-7 rounded-lg'/></a>
      </li>
      <li>
         <a href="https://www.linkedin.com/in/lamidi-gbolahan-abass-578808151">  <FaLinkedin className='text-emerald-400 dark:text-white h-7 w-7'/></a>
      </li>
      </ul>
       <div className='flex '>
        <img src={image3} alt='' className=' w-44 h-44  rounded-full tablet:h-52 laptop:w-52 '/>
      </div>
      {/* <a href='/lamidi Abass Resume.pdf' download={true} className='mt-3 flex items-center justify-center py-1   w-36 rounded-lg hover:animate-bounce bg-emerald-300'>
        
        Resume</a> */} 
          
             {/* whatsapp number and Resume link */}
          <div className=' w-full justify-center flex  tablet:flex-row laptop:flex-row space-x-4 mt-12 text-center '>
          <a className='w-52 h-8 rounded-full bg-gradient-to-tr from bg-emerald-100 pt-2' href='https://wa.me/+2347052599192'>Hire Me!</a>
          <a className='w-52 h-8 rounded-full bg-gradient-to-tr from bg-emerald-100 pt-2' href='/ Abass Resume.pdf' download={true}>Resume</a>
          </div>

    </section>
  
   </>
  )
}

export default Home