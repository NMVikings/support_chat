import React from 'react';
import MessageListForDate from '../MessageListForDate/MessagesListForDate';
import './DateBlock.css';

const DateBlock = ({ date, messageList }) => {
  console.log(messageList);
  return (
    <div className="date-block">
      <div className="date">&#8212; {date} &#8212;</div>
      <MessageListForDate messageList={messageList}/>
    </div>
  )
};

export default DateBlock;