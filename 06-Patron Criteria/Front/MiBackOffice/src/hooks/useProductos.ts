import { useState, useEffect } from 'react';

export const useProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5062/productos')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  return productos;
};