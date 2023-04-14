import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';

function Dashboard() {
  const location = useLocation();
  const user = location.state && location.state.user;
  const [tasks, setTasks] = useState([]);
  const [editableTodo, setEdit] = useState(null)
  const [submitLoader, setSubmitLoader] = useState(false);

  const handlePress = (todo) => {
      //setTodoList([...todoList, { id: todoList.length + 1, title: todo, completed: false }])
      setSubmitLoader(true);
      postTodo({ title: todo, completed: false }).then(res => {
          setTodoList([...todoList, { ...res, id: todoList.length + 1 }])
          setSubmitLoader(false);
      })
  }
  const handleStatus = (id, completed) => {
      const tempList = todoList.map(todo => {
          if (todo.id === id) {
              return { ...todo, completed: completed }
          }
          return todo
      })
      setTodoList(tempList)
  }
  const openEditModal = (todo) => {
      setEdit(todo)
  }
  const handleUpdate = (upadtedTodo) => {
      const tempList = todoList.map(todo => {
          if (todo.id === upadtedTodo.id) {
              return upadtedTodo;
          }
          return todo;
      })
      setTodoList(tempList)
      setEdit(null)
  }
  const deleteTodo = (todoDeletable) => {
      const tempList = todoList.filter(todo => (todo.id !== todoDeletable.id))
      setTodoList(tempList)
  }

  const handleDelete = (todo) => {
      Alert.alert('Delete todo', 'Are you sure you want to delete this todo?', [
          {
              text: 'Yes',
              onPress: () => deleteTodo(todo),
          },
          {
              text: 'Cancel',
          },
      ]);
  }
  useEffect(() => {
      console.log("enter")
      getTodos().then(res => {
          setTodoList([...res])
      })
  }, [])
  return (
    <div>
      <div  className="header-bar">
      <h1>Welcome, {user}!</h1>
      <h2>You have {} incomplete tasks</h2>
      </div>
      <div className='card-body'>
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
        <div>
          <Link to='/contactform'>Contact</Link>
        </div>
        <div>
          <Link to='/login'>Logout</Link>
        </div>
      </div>
      <div>
        <TaskList/>
      </div>
    </div>
  );
}

export default Dashboard;
