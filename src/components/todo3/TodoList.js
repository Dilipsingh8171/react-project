// Import necessary libraries
import React from 'react';
import styled from 'styled-components';

// Styled Components
const TodoListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled.li`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  margin:0 4px;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #e60000;
  }
`;

// TodoList Component
const TodoList = ({ todos, deleteTodo, startEditing }) => {

  
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          {todo.text}
          <div>
            <Button onClick={() => startEditing(todo)}>Edit</Button>
            <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
          </div>
        </TodoItem>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
