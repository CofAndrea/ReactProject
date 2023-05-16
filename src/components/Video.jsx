import React from 'react'
import { useState } from 'react'
import Timer from './Timer';
import bgVideo from '../assets/meditationVid.mp4'
import bgVideo2 from '../assets/waterDrop.mp4'

const Video = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [videoSrc, setVideoSrc] = useState(bgVideo);

  const handleButtonClick = () => {
    setShowTimer(true);
    setVideoSrc(bgVideo2)
  };
  const handleResetClick = () => {
    setShowTimer(false);
    setVideoSrc(bgVideo)
  };
  return (
  <div className='video-container'>
    <video className='first-video' src={videoSrc} autoPlay loop muted/>
     {!showTimer && (
        <div className="video-text">
          <h1>Take</h1>
          <h3>Your Time</h3>
          {!showTimer && (
        <div className='prepare-container'>
          <button className='prepare-button' onClick={handleButtonClick}>Prepare Yourself</button>
        </div>
      )}
        </div>
      )}
      
      {showTimer && (
        <div className='back-btn'>
          <button onClick={handleResetClick}>Back</button>
        </div>
      )}
      {showTimer && <Timer />}
  </div>
  )
}

export default Video