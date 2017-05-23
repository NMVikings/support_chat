import React from 'react';

const ItemFooter = ({ percentage, date, time, lastOperation, is_open, currency }) => {
  let lastOperationSpan = '';
  if (lastOperation !== null && !is_open) {
    lastOperationSpan =
      (<span><br/>
      Последняя операция: {lastOperation.date} | {lastOperation.time}
        (<span className={lastOperation.classString}>{lastOperation.sign} {lastOperation.change} {currency}</span>)
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
