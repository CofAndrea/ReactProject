import React from 'react'
import { useEffect, useState } from 'react';
import randomTexts from './RandomTexts';
const Text = ({showText}) => {
    const [randomText, setRandomText] = useState('');

    useEffect(() => {
        if (showText) {
            generateRandomText();
          }
        }, [showText]);
        const generateRandomText = () => {
            const randomIndex = Math.floor(Math.random() * randomTexts.length);
            setRandomText(randomTexts[randomIndex]);
          };
    return (
      <div className="text-display">
      {randomText.split('\n').map((line, index) => (
        <h3 key={index}>{line}</h3>
      ))}
    </div>
    );
  };

export default Text