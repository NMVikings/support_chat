import React from 'react';
import MessageInput from '../MessageInput/MessageInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import './MessageForm.css';

const MessageForm = () => (
    <form className="message-form">
      <h1 className="message-form__title">Чат</h1>
      <MessageInput />
      <SubmitButton>
        Отправить
      </SubmitButton>
    </form>
);

export default MessageForm;