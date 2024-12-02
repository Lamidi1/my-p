import React from 'react'
// import image3 from '../images/image3.jpg'

const About = () => {

  return (
    <div  className='w-full h-screen '>
         <div className=' p-4 mx-auto flex flex-col justify-center w-full h-full'>
         
         <div className='tablet:text-center laptop:text-center'>
         <p className='text-4xl font-bold inline border-b-4 b-gray-500 uppercase text-red-500'>About me </p>
         </div>

         <p className='text-xl mt-5  tablet:text-center  tablet:text-xl laptop:text-center  animate-pulse  '>I am a passionate full-Stack Developer,
      with over 2years experience building websites and web application using framework like 
        Js,React,Nodejs,Expressjs,postman,MongoDb and farmiliar with responsive design and cross-browser compatibility issues. </p>  
       
         </div>


        
      
    

   
    </div>
  )
}

export default About