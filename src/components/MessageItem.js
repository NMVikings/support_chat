import React from 'react';

const MessageItem = ({ data }) => {
  const {name, content, role, image} = data;
  return (
    <div>
      <div>
        <span>{name}:</span> {content}
      </div>
      <div>
        <img href={image} />
      </div>
    </div>
  )
};

export default MessageItem;