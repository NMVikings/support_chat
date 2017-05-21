import React from 'react';

const Operation = ({ date, text, change, moneyDirection, isEven }) => {
  return (
    <div>
      {isEven.toString()} <br/>
      {date.toLocaleDateString()} | {date.toLocaleTimeString()}
      <br/>
      {text} {moneyDirection.toString()} {change}
    </div>
  )
};

export default Operation;