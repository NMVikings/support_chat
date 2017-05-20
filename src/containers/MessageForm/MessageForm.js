import React from 'react';
import MessageInput from '../../components/MessageInput/MessageInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './MessageForm.css';

const MessageForm = () => {
  return (
    <form className="message-form">
      <h1 className="message-form__title">Чат</h1>
      <MessageInput />
      <SubmitButton>
        Отправить
      </SubmitButton>
    </form>
  )
};

export default MessageForm;