// Todo.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Styled Components
const Container = styled.div`
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

// Main Todo Component
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Load todos from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask(''); // Clear input field
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to edit a todo
  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
  };

  return (
    <Container>
      <Title>📝 Todo App</Title>
      <TodoForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </Container>
  );
};

export default Todo;
