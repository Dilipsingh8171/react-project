// TodoList.jsx
import React, { useState } from 'react';
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

const Input = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
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
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #e60000;
  }
`;

// TodoList Component
const TodoList = ({ todos, deleteTodo, editTodo }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    if (editText.trim() === '') return;
    editTodo(id, editText);
    setEditId(null);
    setEditText('');
  };

  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          {editId === todo.id ? (
            <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
              <Input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <Button type="submit">Save</Button>
            </form>
          ) : (
            <>
              <span>{todo.text}</span>
              <div>
                <Button onClick={() => { setEditId(todo.id); setEditText(todo.text); }}>Edit</Button>
                <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
              </div>
            </>
          )}
        </TodoItem>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
