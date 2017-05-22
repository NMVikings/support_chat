import React from 'react';

const ItemFooter = ({ percentage, date, lastOperation, is_open }) => {
  let lastOperationSpan = <span></span>;
  if (lastOperation !== null && !is_open) {
    const classString =`change ${lastOperation.moneyDirection ? 'change_positive' : 'change_negative'}`;
    lastOperationSpan =
      (<span><br/>
      Последняя операция: {lastOperation.date.toLocaleDateString()} | {lastOperation.date.toLocaleTimeString()}
        (<span className={classString}>{lastOperation.moneyDirection ? '+' : '-'} {lastOperation.change}</span>)
    </span>);
  }

  return (
    <footer className="item__footer">
      {percentage}% годовых<br/>
      Создан: {date.toLocaleDateString()} | {date.toLocaleTimeString()}
      {lastOperationSpan}
    </footer>
  );
};


export default ItemFooter;
