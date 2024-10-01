import React from 'react'
import ProjectData from '../json/ProjectData.json'
import { useNavigate } from "react-router-dom";

const ExploreProjects = () => {

  const navigate = useNavigate();
  const handleProjectVotes = (projectId) => {
    navigate(`/projectdetails/${projectId}`);
  };

    
  return (
    <div className='grid gap-10 lg:grid-cols-2 mt-10 font-serif'>
        {
            ProjectData.map((project) => (
                <div key={project.id} className='bg-white grid p-4 gap-4 grid-cols-12'>
   
                <div className='col-span-5 h-[80%] '>
                <div className='relative top-0  left-0 flex justify-center items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
                      Project
                     </div>
                
              <img className='h-[80%]' src={project.imageUrl} alt={project.title} />
           
                </div>
               
                <div className='flex col-span-7 gap-2 flex-col'>
                  <h1 className='general font-semibold w-max'>{project.title}</h1>
                  <div className='flex justify-between'>
                    <h3 className='text-green-600'>UpVotes: <span ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m6-8l-6-6m-6 6l6-6"/></svg>{project.upVotes}</span></h3>
                    <h3 className='text-red-600'>DownVotes: <span ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"/></svg>{project.downVotes}</span></h3>
                  </div>
                  <h3 className='font-semibold general w-max'>Description</h3>
                  <h3>{project.description}</h3>
                  <div
                    className="cursor-pointer m-auto mt-2 align-center w-full flex justify-center bg-purple-600 text-white text-sm py-1"
                    onClick={() => handleProjectVotes(project.id)}      >
                    <h1>Place Vote</h1>
                  </div>
                </div>
              </div>
            ))
        }
   
     
</div>
  )
}

export default ExploreProjects