export interface ListItem {
    render: () => JSX.Element;
  }

export interface ListItem {
    render: () => JSX.Element;
  }
  
export interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
export interface Product {
    id: number;
    name: string;
    price: number;
  }