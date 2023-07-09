import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import product from '../Mock/ProductAPI';

describe('VideoPlayer', () => {
  
  it('should render the VideoPlayer component', () => {
    render(
      <BrowserRouter>
        <VideoPlayer {...product}/>
      </BrowserRouter>
    );
    const videoPlayer = screen.getByTestId('video-player');
    expect(videoPlayer).toBeInTheDocument();
  })
})