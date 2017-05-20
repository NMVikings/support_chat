import React from 'react';
import './MessageItem.css';

const MessageItem = ({ data }) => {
  const {name, content, role, image} = data;
  const classString = (role === 'Admin') ?
    'chat__message chat__message_reverse' :
    'chat__message';
  return (
    <div className={classString}>
      <div className="chat__avatar">
        <img src={image} alt="avatar"/>
      </div>
      <div className="chat__message-content">
        <span className="chat__message-author">{name}:</span> {content}
      </div>
    </div>
  )
};

export default MessageItem;