import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import ThemeToggle from './ThemeToggle';

const TodoApp = () => {
  // Initialize the todos state
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 dark:bg-gray-900 dark:text-gray-100 bg-white text-black">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
      <ThemeToggle />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
