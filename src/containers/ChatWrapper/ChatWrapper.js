import React from 'react';
import MessageForm from '../MessageForm/MessageForm';
import Chat from '../Chat/Chat';
import './ChatWrapper.css';

const ChatWrapper = () => {
  return (
    <div className="chat-wrapper">
      <MessageForm />
      <Chat />
    </div>
  )
};

export default ChatWrapper;