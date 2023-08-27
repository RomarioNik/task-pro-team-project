const columns = [
    { id: "1", name: "To Do" },
    { id: "2", name: "in progress" },
    { id: "3", name: "done" },
    
  ];
  
  export const getColumns = () => {
    return products;
  };
  
  export const getColumnById = (columnId) => {
    return columns.find((column) => column.id === columnId);
  };