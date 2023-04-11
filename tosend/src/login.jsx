import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'user1' && password === 'password1') {
      // login successful
      console.log('User 1 logged in');
      props.onLogin();
      navigate('/dashboard');
    } else if (username === 'user2' && password === 'password2') {
      // login successful
      console.log('User 2 logged in');
      props.onLogin();
      navigate('/dashboard');
    } else {
      // login failed
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <div className="header-bar">
        <h1>Login</h1>
      </div>
      <div className="card-body">
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
      
    </div>
  );
}

export default Login;
