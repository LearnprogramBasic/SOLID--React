
import Button from '../../../LSP/src/components/Button';

interface SoundButtonProps {
  label: string;
  sound: string;
  onClick: () => void;
}

const SoundButton: React.FC<SoundButtonProps> = ({ label, sound, onClick }) => {
  const handleClick = () => {
    console.log(sound);
    onClick(); 
  };

  return <Button label={label} onClick={handleClick} />;
};

export default SoundButton;