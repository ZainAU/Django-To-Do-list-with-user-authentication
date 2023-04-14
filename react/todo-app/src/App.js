import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Dashboard from './dashboard';
import TaskForm from './task-form';
import Contact from './contact';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleTaskCreate = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path='/taskform' element={<TaskForm onTaskCreate={handleTaskCreate} tasks={tasks}/>}/>
        <Route path='contactform' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;