import ItemList from '../ListItem/ItemList';

const App = () => {
  const tasks = [
    { id: 1, title: 'Aprender React', completed: true },
    { id: 2, title: 'Construir una aplicación ToDo', completed: false },
    { id: 3, title: 'Explorar más sobre componentes', completed: false }
  ];

  return (
    <div>
      <h1>Mis Tareas</h1>
      <ItemList items={tasks} />
    </div>
  );
};

export default App;