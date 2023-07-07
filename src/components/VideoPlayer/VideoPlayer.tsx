import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { IProduct } from '../../interfaces/productInterface';


const VideoPlayer = ({...product}: IProduct) => {
  return (
    <div className='mx-3 my-10' data-testid="video-player">
      <ReactPlayer
        url={product.video}
        width='100%'
      />
    </div>
  )
}

export default VideoPlayer