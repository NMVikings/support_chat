import React from 'react';
import MessageInput from '../components/MessageInput';
import SendMessageButton from '../components/SendMessageButton';

const MessageInputWrapper = () => {
  return (
    <div>
      <MessageInput />
      <SendMessageButton>
        Отправить
      </SendMessageButton>
    </div>
  )
};

export default MessageInputWrapper;