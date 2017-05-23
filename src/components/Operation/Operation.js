import React from 'react';
import { Link } from 'react-router-dom';
import './Operation.css';

const Operation = ({ date, text, change, moneyDirection, currency }) => {
  const classString =`change ${moneyDirection ? 'change_positive' : 'change_negative'}`;
  return (
    <Link to="/operation">
      <div className="operation">
        <span className="operation__date">{date.toLocaleDateString()} | {date.toLocaleTimeString()}</span>
        <br/>
        {text}  <span className={classString}>{moneyDirection ? '+' : '-'} {change} {currency}</span>
      </div>
    </Link>
  )
};

export default Operation;