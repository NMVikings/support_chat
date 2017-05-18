import React from 'react';
import MessageInput from '../components/MessageInput';
import SendMessageButton from './SendMessageButton';

const MessageInputWrapper = () => {
  return (
    <div>
      <MessageInput />
      <SendMessageButton />
    </div>
  )
};

export default MessageInputWrapper;