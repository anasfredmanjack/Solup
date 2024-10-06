import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import io from 'socket.io-client';

const socket = io('https://solup-api.onrender.com'); // Replace with your backend URL

const ExploreProjects = () => {

  

  const navigate = useNavigate();
  const handleProjectVotes = (projectId) => {
    navigate(`/projectdetails/${projectId}`);
  };
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUpdateIn, setNextUpdateIn] = useState(300); // Timer for next update (5 minutes = 300 seconds)

  useEffect(() => {
    // Listen for market updates from the server
    socket.on('trend_update', (data) => {
      console.log('Received new market data:', data);
      setProjectData(data.data);
      setNextUpdateIn(300); // Reset the timer when new data is received
    });

    // Cleanup on component unmount
    return () => {
      socket.off('trend_update');
    };
  }, []);

  // Countdown timer for the next update
  useEffect(() => {
    const countdown = setInterval(() => {
      setNextUpdateIn((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown); // Cleanup interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    // Fetch data from API when the component mounts
    fetch('https://solup-api.onrender.com/api/trends')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        if (data && Array.isArray(data.data)) {
          setProjectData(data.data); // Set the data from the 'data' field
        } else {
          console.error('Unexpected data format:', data);
        }
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Render a loading message until the data is fetched
  if (loading) {
    return <p>Loading projects...</p>;
  }
  
  return (
    <div>
         <div className="flex flex-none justify-center items-center mt-5">
        <p className="text-lg">Next market update in: <span className="text-purple-600">{formatTime(nextUpdateIn)}</span></p>
      </div>
        <div className='grid gap-10 lg:grid-cols-2 mt-10 font-serif mb-[100px]'>
          
            {
                projectData.map((project) => (
                    <div key={project.id} className='bg-white grid p-4 gap-4 grid-cols-12'>
      
                    <div className='col-span-5 h-[80%] '>
                    <div className='relative top-0  left-0 flex justify-center items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
                          Project
                        </div>
                    
                  <img className='h-[80%]' src={project.image} alt={project.name} />
              
                    </div>
                  
                    <div className='flex col-span-7 gap-2 flex-col'>
                      <h1 className='general font-semibold w-max'>{project.name}</h1>
                      <h1 className='general font-semibold w-max'>Price: $ {project.currentPrice}</h1>
                      <div className='flex justify-between'>
                        <h3 className='text-green-600'>UpVotes: <span ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m6-8l-6-6m-6 6l6-6"/></svg>{project.upVotes}</span></h3>
                        <h3 className='text-red-600'>DownVotes: <span ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"/></svg>{project.downVotes}</span></h3>
                      </div>
                      <h3 className='font-semibold general w-max'>Description</h3>
                      <h3>{project.description}</h3>
                      <div
                        className="cursor-pointer m-auto mt-2 align-center w-full flex justify-center bg-purple-600 text-white text-sm py-1"
                        onClick={() => handleProjectVotes(project.id)}      >
                        <h1>Explore Project</h1>
                      </div>
                    </div>
                  </div>
                ))
            }
      
        
    </div>
</div>
  )
}

export default ExploreProjects