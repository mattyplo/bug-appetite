import React from 'react';
import AppNavBar from './components/AppNavBar';
import BugList from './components/BugList';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <BugList />
    </div>
  );
}

export default App;
