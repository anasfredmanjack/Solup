import React, { useEffect } from 'react'
import {useState} from 'react';

const CreateProject = () => {
    const  [projectnameValue, setProjectNameValue] =  useState('');
    const  [projectdescriptionValue, setProjectDescriptionValue] =  useState('');
    const  [projectimageValue, setProjectImageValue] =  useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
 

    const  handleProjectNameChange = (event) => {
        setProjectNameValue(event.target.value);
    };
    const  handleProjectDescriptionChange = (event) => {
        setProjectDescriptionValue(event.target.value);
    };
    const  handleProjectImageChange = (event) => {
        setProjectImageValue(event.target.value);
    };
    
    const handleSubmit = async () => {
      const trendData = {
        title: projectnameValue,
        description: projectdescriptionValue,
        image: projectimageValue,
      };
  
      try {
        const response = await fetch(`https://solup-api.onrender.com/api/trends/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(trendData),
        });
  
        if (response.ok) {
          setIsModalOpen(true); // Open success modal on successful creation
        } else {
          console.error('Error creating project:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting project:', error);
      }
    };
  



    return (
        <div className='font-serif'>
        {/* Pool Name Header And Price starts here */}
        <div class="flex flex-row sm:flex-row justify-between items-center sm:items-start space-y-1 space-x-6 sm:space-y-0">
              
              {/** Back button starts here **/}
              <div className='card shadow-lg bg-white border cursor-pointer'>
                <svg className='text-center m-3 rounded text-purple-600' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
                  <path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" />
                </svg>
              </div>
              {/** Back button ends here **/}
              
              
        </div>
    
    
    
 
    <div class="lg:max-w-4xl ">
    
        {/*Create project starts here*/}
      <div className=''>
          <div className='bg-white shadow-md h-full mt-5 sm:ml-10 p-8'>
          <p className="border-b-2 border-green-500 text-lg sm:text-xl">Create Your Project today</p>
          <form className='mt-5'>
          <div>
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">Enter Project Name: {projectnameValue}</span>
                <input type="text" onChange={handleProjectNameChange} value={projectnameValue}  class=" mt-1 block w-full px-3 py-2 bg-white border-7 border-purple-600 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "/>
              </label>
            </div>
    
                    {/* Description Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Description </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mt-1 block w-full px-3 py-2 bg-white border-7 border-purple-600 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={projectdescriptionValue}
            onChange={handleProjectDescriptionChange}
            placeholder="Enter project description"
          />
        </div>

            <div>
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">Enter Project Image URL: {projectimageValue}</span>
                <input type="text" onChange={handleProjectImageChange} value={projectimageValue}  class=" mt-1 block w-full px-3 py-2 bg-white border-7 border-purple-600 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "/>
              </label>
            </div>
          </form>
         {/*Pool and Share summary*/}
         <div className='text-sm mt-2 font-serif text-center'>
            <button className="mt-3 bg-purple-600 w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
           
             onClick={() => handleSubmit()}>
      Request Listing
    </button>  
         </div>
        {/*Pool and Share summary ends here*/}
          </div>
        
      </div>
       {/*ACreate project ends here*/}
     
    </div>
  
    
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Success</h2>
            <p>Project created successfully!</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

        
      </div>
      
      
      )
}

export default CreateProject