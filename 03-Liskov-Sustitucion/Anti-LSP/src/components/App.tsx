import React from 'react';
import {Button} from './Button';
import {SoundButton} from './SoundButton';

const App: React.FC = () => {
  return (
    <div>
      <h1>Botones de Demostración</h1>
      {/* Uso normal de Button */}
      <Button label="Click me" onClick={() => console.log("Button clicked")} />

      {/* Intento de usar SoundButton sin proporcionar la prop 'sound', lo que causaría un problema */}
      {/* Esto ilustra la violación del LSP, ya que SoundButton no es completamente sustituible por Button */}
      <SoundButton label="Play Sound" onClick={() => console.log("SoundButton clicked")} />
    </div>
  );
};

export default App;
