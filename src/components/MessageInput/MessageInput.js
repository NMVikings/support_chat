import React from 'react';
import './MessageInput.css';

const MessageInput = ({ value, sendMessage, editMessage }) => (
  <textarea className="message-form__input"
            type="text"
            value={value}
            onChange={editMessage}
            onKeyDown={sendMessage}
            placeholder='Сообщение'
            rows='6'
  />
);

export default MessageInput;


