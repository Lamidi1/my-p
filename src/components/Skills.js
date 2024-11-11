import React from 'react'


const Skills = () => {

  return (
    <section className='px-4 py-4 text-center mt-12 ' id='skills'>
      <h2 className='font-bold inline border-b-4 b-gray-500 text-4xl text-red-500 uppercase '>My Skills</h2>
            <p className='mt-5 font-logoFont px-2'>These are the technologies i have work on !</p>

            <div className='justify-items-center  grid grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-4 cursor-pointer tablet:mx-auto laptop:mx-auto space-x-1'>
         
              <div className='h-16 w-16 mt-20'>
            <img className='mt ' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg " alt='skills' />
                 <p className=' font-logoFont'>HTML</p>
              </div>
              
              <div className='h-16 w-16 mt-20'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
                 <p className='font-logoFont'>CSS</p>

              </div>
              <div className='h-16 w-16 mt-20 '>
              
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                 <p className='font-logoFont'>JAVASCRPT</p>

              </div>
              <div className='h-16 w-16 mt-20 '>
            
                <img className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                  <p className='font-logoFont'>REACT</p> 
              </div>
              <div className='h-16 w-16 mt-20'>
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
                 <p className='font-logoFont'>NESTJS</p>
              </div>

              <div className='h-16 w-16 mt-20'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                 <p className='font-logoFont'>VITEjS</p>
              </div>
             
              <div className='h-16 w-16 mt-20'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                 <p className='font-logoFont'>GITHUB</p>
              </div>

              <div className='h-16 w-16 mt-20'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                 <p className='font-logoFont'>GIT</p>
              </div>

              <div className='h-16 w-16 mt-20'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                 <p className='font-logoFont'>NPM</p>
              </div>

              <div className='h-16 w-16 mt-20'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                 <p className='font-logoFont'>NODEJS</p>
              </div>
             
              <div className='h-16 w-16 mt-20'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                 <p className='font-logoFont'>EXPRESSjS</p>
              </div>
             
              <div className='h-16 w-16 mt-20'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                 <p className='font-logoFont'>MONGODB</p>
              </div>
             
              <div className='h-16 w-16 mt-20'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                 <p className='font-logoFont'>FIGMA</p>
              </div>
             

            </div>
    </section>
  )
}

export default Skills