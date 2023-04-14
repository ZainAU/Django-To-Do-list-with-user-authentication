import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TaskForm from './pages/TaskForm';
import Contact from './pages/Contact';
import './App.css'
import TaskList from './components/TaskList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  

  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/Dashboard" element={loggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
        <Route path="/" element={<Login onLogin={handleLogin}/>} />
        <Route path='/Taskform' element={<TaskForm/>}/>
        <Route path='/TaskList' element={<TaskList/>}/>
        <Route path='ContactForm' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;