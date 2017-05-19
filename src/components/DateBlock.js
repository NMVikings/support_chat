import React from 'react';
import MessageListForDate from './MessagesListForDate';

const DateBlock = ({ date, messageList }) => {
  return (
    <div>
      date: {date}
      <MessageListForDate messageList={messageList}/>
    </div>
  )
};

export default DateBlock;