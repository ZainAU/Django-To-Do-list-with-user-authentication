import React, { useState } from 'react';
import TaskForm from './task-form';
import { useLocation, Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const user = location.state && location.state.user;
  const [tasks, setTasks] = useState([]);

  const handleTaskCreate = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1  className="header-bar">Hello, {user}!</h1>
      <Link to='/taskform'>Create Task</Link>
      {/* <TaskForm onTaskCreate={handleTaskCreate} /> */}
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Category: {task.category}</p>
            <p>Due Date: {task.dueDate.toString()}</p>
            <p>Complete: {task.complete ? 'Yes' : 'No'}</p>
            <button onClick={() => handleTaskDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
