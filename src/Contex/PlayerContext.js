import React, { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export function usePlayer() {
  return useContext(PlayerContext);
}

export function PlayerProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPreview = () => {
    setIsPlaying(true);
  };

  const pausePreview = () => {
    setIsPlaying(false);
  };

  return (
    <PlayerContext.Provider value={{ isPlaying, playPreview, pausePreview }}>
      {children}
    </PlayerContext.Provider>
  );
}
