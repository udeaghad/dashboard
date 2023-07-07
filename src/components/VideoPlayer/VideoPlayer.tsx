import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { IProduct } from '../../interfaces/productInterface';


const VideoPlayer = ({...product}: IProduct) => {
  return (
    <div className='mx-3 my-10 bg-gray-50 rounded-md border-2 border-gray-100 p-3' data-testid="video-player">
      <div className='mb-4 bg-primary p-2 w-32'>
        <h1 className='text-white font-bold text-center'>Video</h1>
      </div>

      <div className="md:flex md:justify-end">
        <div className='md:w-full md:max-w-2xl'>
          <ReactPlayer
            url={product.video}
            width='100%'
            
          />
        </div>

      </div>

    </div>
  )
}

export default VideoPlayer