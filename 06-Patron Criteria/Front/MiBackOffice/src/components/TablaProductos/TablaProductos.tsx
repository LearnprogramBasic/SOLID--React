import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

type Producto = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
};

type Props = {
  productos: Producto[];
};

export const TablaProductos: React.FC<Props> = ({ productos }) => {
  const columnDefs: ColDef[] = [
    { headerName: "ID", field: "id" },
    { headerName: "Nombre", field: "nombre", filter: true },
    { headerName: "Categoría", field: "categoria", filter: true },
    { headerName: "Precio", field: "precio", filter: true },
  ];

  return (
    <>
      <h2>TablaProductos</h2>
      <div className="ag-theme-quartz" style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={productos}
          columnDefs={columnDefs.map((col) => ({ ...col, flex: 1 }))}
          domLayout="autoHeight"
        />
      </div>
    </>
  );
};
