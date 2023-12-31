import React from 'react'
import { IEditVideoPlayer } from '../../interfaces/productInterface';


const EditVideoPlayer = ({handleVideoLinkChange, videoRef, ...product}: IEditVideoPlayer) => {
  return (    
    <div className='mx-3 my-10 bg-gray-50 rounded-md border-2 border-gray-100 p-3' data-testid="video-player">
      <div className='mb-4 bg-primary p-2 w-32'>
        <h1 className='text-white font-bold text-center'>Video</h1>
      </div>

      <div className="md:flex md:justify-end w-[95%] md:w-[50%]">               
        <input
          type="text"
          name="video"
          id="video"            
          className="block flex-1 border rounded-m  bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Paste your video URL"
          ref={videoRef}
          onChange={handleVideoLinkChange}
        /> 
      </div>    

    </div>
  )
}

export default EditVideoPlayer