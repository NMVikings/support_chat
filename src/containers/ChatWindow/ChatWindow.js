import React from 'react';
import MessageInputWrapper from '../MessageInputWrapper/MessageInputWrapper';
import ChatWrapper from '../ChatWrapper/ChatWrapper';
import './ChatWindow.css';

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <MessageInputWrapper />
      <ChatWrapper />
    </div>
  )
};

export default ChatWindow;