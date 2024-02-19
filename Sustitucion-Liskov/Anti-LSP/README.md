# AntiLSP 

Este proyecto demuestra la aplicación del Principio de Sustitución de Liskov (LSP) en el desarrollo de componentes React con TypeScript. Se presentan dos componentes principales: Button y SoundButton, donde SoundButton extiende la funcionalidad de Button sin violar el LSP.

Componente Button
El componente Button es un componente básico de React que acepta una etiqueta (label) y una función de evento de clic (onClick). Al hacer clic en el botón, se muestra un mensaje en la consola.

```typescript
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
```

# Componente SoundButton
El componente SoundButton mejora el componente Button añadiendo la capacidad de reproducir un sonido (simulado por un mensaje de consola) junto con el evento de clic original. Este componente cumple con el LSP ya que puede ser utilizado en cualquier lugar donde se espere un Button, sin alterar el comportamiento esperado

```typescript
interface SoundButtonProps extends ButtonProps {
  sound: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ label, sound, onClick }) => {
  const handleClick = () => {
    console.log(sound);  // Simula la reproducción de un sonido
    onClick();
  };

  return <Button label={label} onClick={handleClick} />;
};
```


# Violación del LSP (Anti-LSP)
Una violación del LSP ocurriría si SoundButton requiriera una prop adicional sound para funcionar correctamente, lo que impediría su uso como un Button sin modificar el código existente para incluir esta nueva prop.

```typescript
// Esto causaría un error o un comportamiento inesperado porque 'sound' es requerido.
<SoundButton label="Play Sound" onClick={() => console.log("SoundButton clicked")} />
```