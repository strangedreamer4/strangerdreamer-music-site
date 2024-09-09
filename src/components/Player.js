import React, { useState, useRef } from 'react';

const Player = ({ songUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player text-cyberpunkGreen">
      <audio ref={audioRef} src={songUrl}></audio>
      <button
        className="bg-cyberpunkPink hover:bg-cyberpunkBlue text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-110"
        onClick={togglePlay}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Player;
