import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard';
import TaskForm from './components/task-form';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
        <Route path="/" element={<Login />} />
        <Route path='/taskform' element={<TaskForm/>}/>
        <Route path='contactform' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;