import React from 'react';
import MessageForm from '../../components/MessageForm/MessageForm';
import Chat from '../Chat/Chat';
import './ChatWrapper.css';

const ChatWrapper = () => (
    <div className="chat-wrapper">
      <MessageForm />
      <Chat />
    </div>
);

export default ChatWrapper;