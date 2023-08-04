import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = (event) => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = `~${tasks[index]}~`;
    setTasks(updatedTasks);
  };

  return (
    <div className="App-todo-list">
      <h1>TODO LIST</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.startsWith('~') && task.endsWith('~') ? 'line-through' : 'none',
              }}
            >
              {task.replace(/~/g, '')}
            </span>
            <span className='change_buttons'>
              <button className='change__btn' onClick={() => handleToggleTask(index)}>
                {task.startsWith('~') && task.endsWith('~') ? 'Uncheck' : 'Check'}
              </button>
              <button className='change__btn' onClick={() => handleDeleteTask(index)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;