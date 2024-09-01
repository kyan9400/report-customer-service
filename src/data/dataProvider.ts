export const getData = (page: number, limit: number) => {
    const data = [
      { id: 1, name: "John Doe", age: 30 },
      { id: 2, name: "Jane Smith", age: 25 },
      // Add more data as needed
    ];
  
    // Simulate pagination
    const paginatedData = data.slice((page - 1) * limit, page * limit);
    return paginatedData;
  };
  