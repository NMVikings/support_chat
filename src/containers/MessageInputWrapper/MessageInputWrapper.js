import React from 'react';
import MessageInput from '../../components/MessageInput/MessageInput';
import SendMessageButton from '../../components/SendMessageButton/SendMessageButton';
import './MessageInputWrapper.css';

const MessageInputWrapper = () => {
  return (
    <div className="message-input-wrapper">
      <h1 className="message-input-wrapper__header">Чат</h1>
      <MessageInput />
      <SendMessageButton>
        Отправить
      </SendMessageButton>
    </div>
  )
};

export default MessageInputWrapper;