import React from 'react';
import './Operation.css';

const Operation = ({ date, text, change, moneyDirection }) => {
  const classString =`change ${moneyDirection ? 'change_positive' : 'change_negative'}`;
  return (
    <div className="operation">
      <span className="operation__date">{date.toLocaleDateString()} | {date.toLocaleTimeString()}</span>
      <br/>
      {text}  <span className={classString}>{moneyDirection ? '+' : '-'} {change} </span>
    </div>
  )
};

export default Operation;