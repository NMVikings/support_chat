import React from 'react';
import MessageItem from '../MessageItem/MessageItem';
import './MessageListForDate.css';

const MessagesListForDate = ({ messageList }) => (
    <div className="chat__message-list">
      {messageList.map((item, index) => <MessageItem key={index} data={item}/>)}
    </div>
);

export default MessagesListForDate;