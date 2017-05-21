import React from 'react';
import MessageListForDate from '../MessageListForDate/MessagesListForDate';
import './DateBlock.css';

const DateBlock = ({ date, messageList }) => (
    <div className="chat__date-block">
      <div className="chat__date-title">&#8212; {date} &#8212;</div>
      <MessageListForDate messageList={messageList}/>
    </div>
);

export default DateBlock;