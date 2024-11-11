import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center justify-center  py-32 px-12 tablet:px-6 laptop:px-8'>
     <div className='max-w-md w-full space-y-8'>
     <h2 className="text-center text-3xl font-bold uppercase text-red-500">Get in Touch</h2>
       <p className='mt-1 text-center text-sm  capitalize font-logoFont'>Want to work with me let's connect?<br></br> i am open to full-time part-time Remote$Hybrid</p>
      
      <form className='mt-8 space-y-6 ' id='form'>
      <div className='rounded-md shadow-sm -space-y-px'>
      <div className=' '>
              <label htmlFor="name" className="">Name:</label>
              <input
                name="name"
                type="text"
                required
                className=" block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
      
            <div>
              <label htmlFor="email" className="">Email Address:</label>
              <input
                name="email"
                type="email"
                required
                className=" block w-full px-3 py-2 border  space-y-8 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="">Message:</label>
              <textarea
                name="message"
                rows="4"
                required
                className="  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Message"
              />
            </div>
            
            <div className=''>
            <button
              type="submit"
              className="  mt-5  hover:ease-in-out w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
      
      </div>
      </form>
     
    </div>
    </div>
  )
}

export default Contact