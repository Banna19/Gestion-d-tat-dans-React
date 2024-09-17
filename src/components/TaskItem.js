// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, deleteTask, toggleCompletion, setEditingTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleCompletion(task.id)}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => setEditingTask(task)}>Edit</button>
      <button 
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this task?')) {
            deleteTask(task.id);
          }
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
