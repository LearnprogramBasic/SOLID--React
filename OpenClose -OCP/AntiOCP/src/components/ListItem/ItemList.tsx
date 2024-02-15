import React from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  items: Task[];
}

const ItemList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.title} - {item.completed ? 'Completada' : 'Pendiente'}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;