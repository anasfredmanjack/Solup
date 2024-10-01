import React, { useEffect } from 'react'
import {useState} from 'react';
import { useParams } from "react-router-dom";
import projectData from '../json/ProjectData.json'
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const ProjectDetails = () => {

    const { projectId } = useParams(); //extract ProjectId from url here
    const navigate = useNavigate();
    const [projectDetailsData, setprojectDetailsData] = useState(null); //initialise empty ProjectDetails array
    const  [inputValue, setInputValue] =  useState('');
    const  handleChange = (event) => {
        setInputValue(event.target.value);
    };

 

    useEffect(() => {
      //Fetch project details from json data
    
      const selectedProject = projectData.find(project => project.id === parseInt(projectId));
      setprojectDetailsData(selectedProject);
 
}, [projectId]);

      
    if (!projectDetailsData) {
      return <div>{projectId}</div>; // Show a loading state while data is being fetched
  }

  return (
 

    <div className='font-serif'>
    {/* Pool Name Header And Price starts here */}
    <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-1  sm:space-y-0">
          
          {/** Back button starts here **/}
          <div className='card shadow-lg bg-white border cursor-pointer' onClick={() => navigate(-1)}>
            <svg className='text-center m-3 rounded text-purple-600' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
              <path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" />
            </svg>
          </div>
          {/** Back button ends here **/}
          
    
      
          {/** Pool Price starts here **/}
          <div class="text-center sm:text-left">
            <p className="text-md sm:text-lg">Current price: 
              <span className='text-green-500 text-sm sm:text-md'> +30%</span> <span className='text-purple-500'>${projectDetailsData.projectprice}</span>
            </p>
          </div>
          {/** Pool Price ends here **/}
          
    </div>

      {/*Project details table & starts here*/}
      <div class="flex flex-col sm:flex-row ">
        {/*Pool details table starts here*/}
        <div>
            <div className='bg-white h-full  shadow-md relative p-3 sm:p-6 max-w-lg mt-5 sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-[-3%]'>
                {/* Project Market div */}
                <div className='absolute top-0 left-0 flex items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
                  Project Market
                </div>

                
                  {/* Project  title div starts here */}
                  <div className='mt-8 sm:mt-8 border-b-4 border-purple-600 w-fit flex justify-center'>
                        <img src={projectDetailsData.imageUrl} className='m-0 h-8 w-8 mr-1 mb-[1%] mt-[-5%]'/>
                    <p className='text-lg sm:text-md md:text-2md font-semibold text-black '>
                    {projectDetailsData.title} 
                    </p>
                    </div>
                    {/* Project title div ends here */}

                  {/* Project Description starts here */}
                  <div>
                  <div className='mt-2 sm:mt-2 border-b-4 border-purple-600 w-fit'>
                  <p className='text-lg sm:text-md md:text-2md font-semibold text-black'>
                    Description
                  </p>
                </div>

                <small>{projectDetailsData.description}</small>
                </div>
               {/* Project Description ends here */}


                {/*Project Table starts here*/}
                <div class="overflow-x-auto mt-5">
            <table class="min-w-full table-auto border-collapse">
              <thead>
                <tr class="bg-gray-200">
                  <th class=" py-3 px-6  text-left text-xs sm:text-sm md:text-base whitespace-nowrap">UpVotes</th>
                  <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">DownVotes</th>
                  <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Project Liquidity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class=" py-3 px-6 text-xs sm:text-sm md:text-base text-green-600"> {projectDetailsData.upVotes}</td>
                  <td class=" py-3 px-6 text-xs sm:text-sm md:text-base text-red-600">{projectDetailsData.downVotes}</td>
                  <td class=" py-3 px-6 text-xs sm:text-sm md:text-base text-purple-600">{projectDetailsData.projectLiquidity}</td>
                      
                </tr>
              
              </tbody>
            </table>
                  </div>
                {/*Project Table ends here*/}

              </div>
        </div>
        {/*Project details table ends here*/}
       
            {/*Support Project Liquidity starts here*/}
        <div className=''>
            <div className='bg-white shadow-md h-full mt-5 sm:ml-10 p-8'>
            <p className="border-b-2 border-green-500 text-lg sm:text-xl">Support Project Pool</p>
            <form className='mt-5'>
            <div>
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700">Enter Amount: {inputValue}</span>
                  <input type="text" onChange={handleChange} value={inputValue}  class=" mt-1 block w-full px-3 py-2 bg-white border-7 border-purple-600 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
                </label>
              </div>
            </form>
          {/*Pool and Share summary*/}
          <div className='text-sm mt-2 font-serif'>
              <p>Total Interest per share:  </p>   
              <p>Total shares:  </p>   
              <p>Due Date:  </p>   
              <button className="mt-3 bg-purple-600 w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Fund Liquidity Pool
      </button>  
          </div>
          {/*Pool and Share summary ends here*/}
            </div>
          
        </div>
        {/*Support Project Liquidity starts here*/}
      
      </div>
      {/*Pool details table & ends here*/}
         {/*Trade Project starts here*/}
         <div class="flex flex-col  mt-10 lg:max-w-5xl lg:ml-[-4%]">
            <div className='bg-white shadow-md h-full mt-5 sm:ml-10 p-8'>
            <p className="border-b-2 border-green-500 text-lg sm:text-xl">Trade Project</p>
            <form className='mt-5'>
            <div>
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700">Enter Amount: {inputValue}</span>
                  <input type="text" onChange={handleChange} value={inputValue}  class=" mt-1 block w-full px-3 py-2 bg-white border-7 border-purple-600 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
                </label>
              </div>
            </form>
          {/*Pool and Share summary*/}
          <div className='text-sm mt-2 font-serif'>
              <p>Total Interest per share:  </p>   
              <p>Total shares:  </p>   
              <p>Due Date:  </p>  
              <div className='flex justify-between'>
              <button className="mt-3 mr-4 bg-green-600 w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Long Project
            </button>   
                    <button className="mt-3 bg-red-600 w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Short Project
            </button>  
            </div>
          </div>
          {/*Pool and Share summary ends here*/}
            </div>
          
        </div>
        {/*Trade Project Liquidity starts here*/}

      {/*project Chart starts here*/}
      <div className='flex flex-col'>
      <div className='bg-white h-full  shadow-md relative p-4  lg:w-[98.7%] mt-10 '>
      <p className="border-b-2 border-purple-500 text-lg sm:text-xl mb-4">Project History</p>

      <ResponsiveContainer width="100%" height={300}>
          <LineChart data={projectData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="upVotes" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="downVotes" stroke="#82ca9d" />
          </LineChart>
      </ResponsiveContainer>
      </div>
      </div>
      {/*project Chart ends here*/}

  </div>

  
  )
}

export default ProjectDetails