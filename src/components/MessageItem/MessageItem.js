import React from 'react';
import './MessageItem.css';

const MessageItem = ({ data }) => {
  const {name, content, role, image} = data;
  const classString = (role === 'Admin') ?
    'message-item message-item_reverse' :
    'message-item';
  return (
    <div className={classString}>
      <div className="message-avatar">
        <img src={image} alt="avatar"/>
      </div>
      <div className="message-content">
        <span className="message-author">{name}:</span> {content}
      </div>
    </div>
  )
};

export default MessageItem;