import React from 'react';
import Button from './Button';
import SoundButton from './SoundButton';

const App: React.FC = () => {
  return (
    <div>
      <Button label="Click me" onClick={() => console.log("Button clicked")} />
      <SoundButton label="Play sound" sound="Beep" onClick={() => console.log("SoundButton clicked")} />
    </div>
  );
};

export default App;