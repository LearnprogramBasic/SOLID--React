import React from 'react';
import { ListItem } from '../../Interface/ListItem';

interface Props {
  items: ListItem[];
}

export const ItemList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.render()}</li>
      ))}
    </ul>
  );
};

