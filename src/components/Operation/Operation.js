import React from 'react';
import CurrencySign from '../CurrencySign/CurrencySign';
import { Link } from 'react-router-dom';
import './Operation.css';

const Operation = ({ date, text, change, moneyDirection, currency, id, itemId }) => {
  const classString =`change ${moneyDirection ? 'change_positive' : 'change_negative'}`;
  return (
    <Link to={`/operations/${itemId}/${id}`}>
      <div className="operation">
        <span className="operation__date">{date.toLocaleDateString()} | {date.toLocaleTimeString()}</span>
        <br/>
        {text}  <span className={classString}>{moneyDirection ? '+' : '-'} {change} <CurrencySign currency={currency}/> </span>
      </div>
    </Link>
  )
};

export default Operation;