import React from 'react';
import CurrencySign from '../CurrencySign/CurrencySign';

const ItemFooter = ({ percentage, date, time, lastOperation, is_open, currency }) => {
  let lastOperationSpan = '';
  if (lastOperation !== null && !is_open) {
    lastOperationSpan =
      (<span><br/>
      Последняя операция: {lastOperation.date} | {lastOperation.time}
        (<span className={lastOperation.classString}>{lastOperation.sign} {lastOperation.change} <CurrencySign currency={currency} /></span>)
    </span>);
  }

  return (
    <footer className="item__footer">
      {percentage}% годовых<br/>
      Создан: {date} | {time}
      {lastOperationSpan}
    </footer>
  );
};


export default ItemFooter;
