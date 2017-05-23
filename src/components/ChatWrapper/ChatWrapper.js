import React from 'react';
import MessageForm from '../../containers/MessageForm/MessageForm';
import Chat from '../../containers/Chat/Chat';
import './ChatWrapper.css';

const ChatWrapper = () => (
    <div className="chat-wrapper">
      <MessageForm />
      <Chat />
    </div>
);

export default ChatWrapper;