import React from 'react'

const Projects = () => {
  
  const projects = [
    {
      title: "Todo application",
      description: "This is a Todoapp that enable users to perform their task and activities.",
       imageUrl:"https://i.postimg.cc/LXvyVWHx/Screenshot-11-3-2024-11016-127-0-0-1.jpg",
       technologies: ["Html", "JavaScript", "CSS"],
      LiveLink:"https://lamidi1.github.io/Todo-App/",
      codeLink: "https://github.com/Lamidi1/My-Todolist",
      
    },
    {
      title: " simple calculator",
      description: "This app was built for simplicity and advanced functionality while adapting to a variety of user needs.",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://i.postimg.cc/qRdsVmsf/Screenshot-3-3-2024-155632-127-0-0-1.jpg",
      liveLink:"https://my-simple-calculator-gules.vercel.app/",
      codeLink: "https://github.com/Lamidi1/My-simple-calculator",
      
    },
    
    {
      title: " Stop watch",
      // name: "Simple calculator",
      description: "A stopwatch app built to help user to track time precisely,or study sessions",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://i.postimg.cc/y8sCxB7W/Screenshot-14-3-2024-112925-127-0-0-1.jpg",
      liveLink:"https://",
      codeLink: "https://github.com/Lamidi1/StopWatch",
      
    },
    
    {
      title: " My portfolio",
      description: "This portfolio app was built to show what i have done so far",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://i.postimg.cc/gJCnVZs5/Screenshot-29-12-2024-191538-172-23-208-1.jpg",
      liveLink:"https://abassportfolio.vercel.app/",
      codeLink: "https://github.com/Lamidi1/my-p",
      
    },
    
    {
      title: " ",
      description: "This app was build to calculator mordern way",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://",
      liveLink:"https://",
      codeLink: "https://",
      
    },
    
    {
      title: " ",
      description: "This app was build to calculator mordern way",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://",
      liveLink:"https://",
      codeLink: "https://",
      
    },
    
  

  ]
       
  return (
    // project Seection
    <section className='px-4 py-4 text-center mt-12'>
     <h2 className='text-4xl font-bold inline border-b-4 b-gray-500 uppercase text-red-500 '>My Projects</h2>
     <p className='mt-5 capitalize'>These are some of my work</p>
      
      <div  className=' grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-3 gap-8 pt-5 duration-200 ease-in-out hover:text-lime-300'>

      {projects.map((project, index) => (
       <div key={index} className=' bg-green-300 shadow-lg rounded-lg overflow-hidden ' id='card'>
           <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
   
             <div className='p-6'>
             <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
             <p className="text-gray-700 mb-4">{project.description}</p>
               <div className='flex justify-between items-center '>
               <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 "
                  > LiveDemo</a>

                    <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  > Code</a>

               </div>

             </div>

       </div>

 ))}

      </div>

    </section>
  );
};

export default Projects