import React from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <ChatWindow/>
      <Sidebar/>
    </div>
  );
};

export default App;
