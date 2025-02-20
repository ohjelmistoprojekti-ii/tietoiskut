import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LocalStorageViewerPage from './LocalStorageViewerPage';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the data
      console.log({ name, email });
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      navigate('/local-storage-viewer');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="App">
      <main>
        <Link to="https://react.dev" target="_blank" rel="noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:  
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>
          <div>
            <label>
              Email: 
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/local-storage-viewer" element={<LocalStorageViewerPage />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
