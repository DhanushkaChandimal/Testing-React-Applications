import React from 'react';
import axios from 'axios';

const ButtonAPICall = () => {
  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(response.data); // For demonstration purposes
      // Here you would typically handle the response data (e.g., set state, display data)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <button onClick={fetchTodos}>Fetch Todos</button>
  );
};

export default ButtonAPICall;