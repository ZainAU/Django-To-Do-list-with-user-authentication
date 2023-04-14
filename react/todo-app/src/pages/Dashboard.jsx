import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';
import { getTasks, postTask } from '../services/TodoService';

function Dashboard() {
  const location = useLocation();
  const user = location.state && location.state.user;
  const [taskList, setTaskList] = useState([]);
  const [done, setDone] = useState([])
  const [editableTask, setEdit] = useState(null)
  const [submitLoader, setSubmitLoader] = useState(false);

  const handleSubmit = (task) => {
      //settask([...taskList, { id: taskList.length + 1, title: task, completed: false }])
      setSubmitLoader(true);
      postTask({ title: task, completed: false }).then(res => {
          setTaskList([...taskList, { ...res, id: taskList.length + 1 }])
          setSubmitLoader(false);
      })
  }
  
  const handleStatus = (id, completed) => {
      const tempList = taskList.map(task => {
          if (task.id === id) {
              return { ...task, completed: completed }
          }
          return task
      })
      setTaskList(tempList)
  }

  const openEditModal = (task) => {
      setEdit(task)
  }
  const handleUpdate = (upadtedtask) => {
      const tempList = taskList.map(task => {
          if (task.id === upadtedtask.id) {
              return upadtedtask;
          }
          return task;
      })
      setTaskList(tempList)
      setEdit(null)
  }
  const deleteTask = (taskDeletable) => {
      const tempList = taskList.filter(task => (task.id !== taskDeletable.id))
      setTaskList(tempList)
  }

  const handleDelete = (task) => {
      alert('Delete task\nAre you sure you want to delete this task?', [
          {
              text: 'Yes',
              onClick: () => deleteTask(task),
          },
          {
              text: 'Cancel',
          },
      ]);
  }
  useEffect(() => {
      console.log("enter")
      getTasks().then(res => {
          setTaskList([...res])
      })
  }, [])

  return (
    <div>
      {/* <div  className="header-bar">
      <h1>Welcome, {user}!</h1>
      <h2>You have {} incomplete task</h2>
      </div>
      <div className='card-body'>
        <Link to='/taskform'>Create Task</Link>
        <div>
          {task.map((task, index) => (
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
        <div>
          <Link to='/contactform'>Contact</Link>
        </div>
        <div>
          <Link to='/login'>Logout</Link>
        </div>
      </div> */}
      <div>
        <TaskList tasks={taskList} handleStatus={handleStatus} openEditModal={openEditModal} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default Dashboard;
