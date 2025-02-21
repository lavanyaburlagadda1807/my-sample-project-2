import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';
import ThemeProvider from './components/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
