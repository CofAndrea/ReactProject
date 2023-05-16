import React, { useState, useRef} from 'react';
import song from '../assets/meditationSong.mp3'

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev)
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }};
    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        const audio = audioRef.current;
        audio.volume = newVolume / 100;
      };
    
  return (
    <div className="song-controls">
      
      <audio ref={audioRef} src={song} loop/>
      <div className="volume-slider">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      <button className="play-pause-button" onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      </div>
    </div>
  );
};

export default Audio;
