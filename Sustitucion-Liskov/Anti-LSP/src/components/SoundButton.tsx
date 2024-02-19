import React from 'react';
import { Button } from './Button'; 

interface SoundButtonProps {
  label: string;
  sound: string; 
  onClick: () => void;
}

export const SoundButton: React.FC<SoundButtonProps> = ({ label, sound, onClick }) => {
  const enhancedOnClick = () => {
    console.log(sound); // Simula la reproducción de un sonido
    onClick();
  };

  return <Button label={label} onClick={enhancedOnClick} />;
};


