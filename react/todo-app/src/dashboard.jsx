import React, { useState } from 'react';
import TaskForm from './task-form';
import TaskList from './tasklist';
import { useLocation, Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const user = location.state && location.state.user;
  const [tasks, setTasks] = useState([]);

  const handleTaskDelete = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  const handleTaskCreate = (task) => {
    setTasks([...tasks, task]);
    console.log(task)
  };

  const handleTaskUpdate = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setEditingTask(taskToEdit);
  };

  const [editingTask, setEditingTask] = useState(null);


  return (
    <div>
      <div  className="header-bar">
      <h1>Welcome, {user}!</h1>
      <div>
      <Link className='link' to='/contactform'>Contact</Link>
      <Link className='link' to='/login'>Logout</Link>
      </div>
      </div>
      {/* <div className='card-body'> */}
      {/* <Link to='/taskform'>Create Task</Link> */}
      <div className='flex-container'>
      <div className='taskform'><TaskForm onTaskCreate={handleTaskCreate} tasks={tasks} /></div>
      <div className='tasklist'><TaskList tasks={tasks} onTaskDelete={handleTaskDelete} onEditTask={handleEditTask} onTaskUpdate={handleTaskUpdate} /></div>
      </div>
    </div>
  );
}

export default Dashboard;
