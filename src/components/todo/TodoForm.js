// Import necessary libraries
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

// TodoForm Component
const TodoForm = ({ addTodo, editTodo, currentTodo }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setTask(currentTodo.text);
    } else {
      setTask('');
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    if (currentTodo) {
      editTodo(currentTodo.id, task);
    } else {
      addTodo(task);
    }
    setTask(''); // Clear input field
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <Button type="submit">{currentTodo ? 'Edit' : 'Add'}</Button>
    </Form>
  );
};

export default TodoForm;
