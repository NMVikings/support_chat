import React from 'react';
import MessageItem from '../MessageItem/MessageItem';
import './MessageListForDate.css';

const MessagesListForDate = ({ messageList }) => {
  return (
    <div className="message-list">
      {messageList.map((item, index) => <MessageItem key={index} data={item}/>)}
    </div>
  )
};

export default MessagesListForDate;