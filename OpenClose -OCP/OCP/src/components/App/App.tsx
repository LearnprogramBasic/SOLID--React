import React from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { TaskItem } from '../TaskItem/TaskItem'; 
import { ProductItem } from '../ProductItem/ProductItem';

const App: React.FC = () => {
  const tasks = [
    { id: 1, title: 'Aprender React', completed: true },
    { id: 2, title: 'Construir una aplicación ToDo', completed: false }
  ];

  const products = [
    { id: 1, name: 'Teclado Mecánico', price: 100 },
    { id: 2, name: 'Mouse Gamer', price: 60 }
  ];

  const taskItems = tasks.map(task => new TaskItem(task));
  const productItems = products.map(product => new ProductItem(product));

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ItemList items={[...taskItems, ...productItems]} />
    </div>
  );
};

export default App;
