import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LocalStorageViewer from './LocalStorageViewer';
import logo from './logo.svg';
import './App.css';

const LocalStorageViewerPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <main>
        <Link to="https://react.dev" target="_blank" rel="noreferrer">
            <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h1>Local Storage Viewer</h1>
        <LocalStorageViewer />
        <button onClick={handleBackClick}>Back to Front Page</button>
      </main>
    </div>
  );
};

export default LocalStorageViewerPage;