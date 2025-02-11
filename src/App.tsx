import React, { useState } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [petalsRemaining, setPetalsRemaining] = useState(24);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [fallingPetal, setFallingPetal] = useState(false);

  const messages = [
    "mag vavalentines tayo",
    "hindi tayo mag vavalentines"
  ];

  const handleFlowerClick = () => {
    if (petalsRemaining > 0) {
      setFallingPetal(true);
      
      // Determine message based on remaining petals
      const messageIndex = petalsRemaining <= 2 ? 0 : (24 - petalsRemaining) % 2;
      const newMessage = messages[messageIndex];
      
      setTimeout(() => {
        setPetalsRemaining(prev => prev - 1);
        setMessage(newMessage);
        setShowMessage(true);
        setFallingPetal(false);
      }, 1000);

      // Play sound when last petal falls
      if (petalsRemaining === 1) {
        const audio = new Audio('/path-to-your-audio.mp3');
        audio.play().catch(error => console.log('Audio playback failed:', error));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-red-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      {/* Sunflower */}
      <div 
        className="relative cursor-pointer transform hover:scale-105 transition-transform"
        onClick={handleFlowerClick}
      >
        <div className="w-80 h-80 relative">
          {/* Flower center */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full z-20"
            style={{ 
              background: 'radial-gradient(circle, #8B4513 60%, #654321 100%)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
            }}
          >
            {/* Center texture */}
            <div className="w-90 h-90 rounded-full overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: '#654321',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  </div>
          
          {/* Petals */}
          {[...Array(petalsRemaining)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: '80px', // Reduced from 100px
                height: '30px', // Reduced from 35px
                left: '56%',
                top: '50%',
                transform: `
                  translate(-25%, -50%) 
                  rotate(${(360 / 24) * i}deg) 
                  translateX(10px)
                `,
                transformOrigin: 'left center',
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to right, #FFD700, #FFA500)',
                  borderRadius: '40%',
                  transform: 'scale(1.6, 1)', // Reduced from 1.8
                  transformOrigin: '0 50%',
                  filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))',
                }}
              />
            </div>
          ))}
        </div>

        {/* Stem */}
        <div className="relative mx-auto -mt-6">
          <div 
            className="w-6 h-40 mx-auto"
            style={{ 
              background: 'linear-gradient(to right, #228B22, #32CD32)',
              borderRadius: '0px'
            }}
          >
            {/* Leaves */}
<div
  className="absolute left-16 top-1/4 w-12 h-16"
  style={{
    background: 'linear-gradient(45deg, #228B22, #32CD32)',
    borderRadius: '100% 0 100% 0',
    transform: 'rotate(30deg) skew(10deg) translateX(20px)',
    transformOrigin: 'bottom right',
  }}
/>


<div 
  className="absolute top-1/2 w-12 h-16"
  style={{
    right: '90px', // Slightly more left
    background: 'linear-gradient(-45deg, #228B22, #32CD32)',
    borderRadius: '0 100% 0 100%',
    transform: 'rotate(-30deg) skew(-10deg)',
    transformOrigin: 'bottom left',
  }}
/>




          </div>
        </div>
      </div>

      {/* Falling petal animation */}
      {fallingPetal && (
        <div 
          className="absolute animate-fall"
          style={{
            width: '80px', // Updated to match new petal size
            height: '30px', // Updated to match new petal size
            top: '50%',
            left: '50%',
          }}
        >
          <div 
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, #FFD700, #FFA500)',
              borderRadius: '40%',
              transform: 'scale(1.6, 1)', // Updated to match new petal scale
            }}
          />
        </div>
      )}

      {/* Message display */}
      {showMessage && (
        <div className="mt-8 text-2xl font-cursive text-red-600 animate-fadeIn">
          {message}
        </div>
      )}
    </div>
  );
}

export default App;