import React from 'react';
import { IThemeChanger } from '../../interfaces/IUserProfile';

export const ThemeChangerButton: React.FC<IThemeChanger> = ({ onThemeChange }) => (
  <button onClick={onThemeChange}>Cambiar Tema</button>
);