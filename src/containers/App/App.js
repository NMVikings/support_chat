import React from 'react';
import ChatWindow from '../ChatWrapper/ChatWrapper';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

const App = () => (
    <div className="app">
      <ChatWindow/>
      <Sidebar/>
    </div>
);

export default App;
