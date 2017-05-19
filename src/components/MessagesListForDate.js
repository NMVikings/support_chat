import React from 'react';
import MessageItem from '../components/MessageItem';

const MessagesListForDate = ({ messageList }) => {
  return (
    <div>
      {messageList.map((item, index) => <MessageItem key={index} data={item}/>)}
    </div>
  )
};

export default MessagesListForDate;