import React, { useState, useEffect } from 'react';
import Text from './Text';
import sound from '../assets/expireSound.mp3'

const Timer = () => {
  const defaultTimer = 300;
  const [timer, setTimer] = useState(300);
  const [intervalId, setIntervalId] = useState(null);
  const [showText, setShowText] = useState(false);
 
  const startTimer = () => {
    if (!intervalId && timer > 0) {
        const id = setInterval(() => {
          setTimer((prevTimer) => {
            const newTimer = prevTimer - 1;
            if (newTimer === 0) {
              stopTimer();
            }
            return newTimer;
          });
        }, 1000);
        setIntervalId(id);
        setShowText(true);
      }
  };
  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };
  const decreaseTimer = () => {
    setTimer((prevTimer) => Math.max(prevTimer - 300, 0));
  };
  const resetTimer = () => {
    stopTimer();
    setTimer(defaultTimer);
    setShowText(false)
  };
  const playSound = ()=>{
   new Audio(sound).play()
  }
  useEffect(() => {
    if (timer === 2) {
      playSound();
    } else if (timer === 0) {
      stopTimer()
    }
  }, [timer]); 

  const increaseTimer = () => {
    setTimer(timer + 300);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='timer-container'>
      <h2 className='timer-text'>{formatTime(timer)}</h2>
      <div>
      <button className='timer-button'onClick={increaseTimer}>+</button>
      <button className='timer-button'onClick={intervalId ? stopTimer : startTimer}  >
          {intervalId ? 'Stop' : 'Start'} 
      </button>
      <button className='timer-button'onClick={decreaseTimer}>-</button>
      <button className='timer-button'onClick={resetTimer}>reset</button>
      </div>
      {showText && <Text showText={showText}/>}
    </div>
  );
};
export default Timer;
