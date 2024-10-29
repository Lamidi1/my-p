import React from 'react'

const Projects = () => {
  
  const projects = [
    {
      title: "Todo application",
      description: "This is a Todoapp that enable users to perform their task and activities.",
       imageUrl:"https://i.postimg.cc/LXvyVWHx/Screenshot-11-3-2024-11016-127-0-0-1.jpg",
       technologies: ["Html", "JavaScript", "CSS"],
      LiveLink:"https://",
      codeLink: "https://github.com/Lamidi1/My-Todolist",
      
    },
    {
      title: " simple calculator",
      description: "This app was build to calculator mordern way",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://i.postimg.cc/qRdsVmsf/Screenshot-3-3-2024-155632-127-0-0-1.jpg",
      liveLink:"https://",
      githubLink: "https://github.com/Lamidi1/My-simple-calculator",
      
    },
    
    {
      title: " Event application",
      // name: "Simple calculator",
      description: "A full-stack app in which users can apply for event online from different location and venue",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://i.postimg.cc/y8sCxB7W/Screenshot-14-3-2024-112925-127-0-0-1.jpg",
      liveLink:"https://",
      githubLink: "https://github.com/Lamidi1/event-application",
      
    },
    
    {
      title: " simple calculator",
      description: "This app was build to calculator mordern way",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "",
      liveLink:"https://",
      githubLink: "https://github.com/Lamidi1/My-simple-calculator",
      
    },
    
    {
      title: " simple calculator",
      description: "This app was build to calculator mordern way",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://i.postimg.cc/k4vrzTgR/Screenshot-3-3-2024-155632-127-0-0-1.jpg",
      liveLink:"https://",
      githubLink: "https://github.com/Lamidi1/My-simple-calculator",
      
    },
    
    {
      title: " simple calculator",
      description: "This app was build to calculator mordern way",
       technologies: ["Html", "JavaScript", "CSS"],
      imageUrl: "https://i.postimg.cc/k4vrzTgR/Screenshot-3-3-2024-155632-127-0-0-1.jpg",
      liveLink:"https://",
      githubLink: "https://github.com/Lamidi1/My-simple-calculator",
      
    },
    
    



  ]
       
  return (
    // project Seection
    <section className='px-4 py-4 text-center mt-12'>
     <h2 className='text-4xl font-bold inline border-b-4 b-gray-500 uppercase text-red-500 '>My Projects</h2>
     <p className='mt-5 capitalize'>These are some of my work</p>
      
      <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 pt-5 '>

      {projects.map((project, index) => (
       <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden '>
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