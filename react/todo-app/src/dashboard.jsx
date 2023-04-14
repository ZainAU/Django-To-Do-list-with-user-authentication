import React, { useEffect, useState } from 'react';
import TaskForm from './task-form';
import TaskList from './tasklist';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { getTasks, postTask } from './services/TaskService';

function Dashboard() {
  const location = useLocation();
  const user = location.state && location.state.user;
  const [tasks, setTasks] = useState([]);
  const [submitLoader, setSubmitLoader] = useState(false);

  const handleTaskDelete = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  const handleTaskCreate = (task) => {
    setSubmitLoader(true);
    // postTask({id: tasks.length, title: task,  completed: false}).then(res => {
    //   setTasks([...tasks, {...res, id: tasks.length+1}]);
    setTasks([...tasks, task])
    // localStorage.setItem("tasks"+tasks.length.toString(), JSON.stringify(task))
    setSubmitLoader(false);
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

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks))
  //   console.log(localStorage)
  // }, [tasks])
  
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
      <div className='taskform'><TaskForm onTaskCreate={handleTaskCreate} tasks={tasks} loading={submitLoader} /></div>
      <div className='tasklist'><TaskList tasks={tasks} onTaskDelete={handleTaskDelete} onEditTask={handleEditTask} onTaskUpdate={handleTaskUpdate} /></div>
      </div>
    </div>
  );
}

export default Dashboard;
