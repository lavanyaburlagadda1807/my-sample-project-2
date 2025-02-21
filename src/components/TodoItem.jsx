import React from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <motion.li
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex justify-between items-center p-2 my-2 border-b ${
        todo.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      <span onClick={() => toggleTodo(index)} className="cursor-pointer">
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </motion.li>
  );
};

export default TodoItem;
