import React from 'react';
import { connect } from 'react-redux';
import { getPropsForItem } from '../../reducers';

const ItemFooter = ({ percentage, date, lastOperation, is_open }) => {
  const lastOperationSpan = (lastOperation !== null && !is_open) ?
    (<span><br/>
      Последняя операция: {lastOperation.date.toLocaleDateString()} | {lastOperation.date.toLocaleTimeString()} ({lastOperation.change})
    </span>) : <span></span>
  return (
    <footer className="item__footer">
      {percentage}% годовых<br/>
      Создан: {date.toLocaleDateString()} | {date.toLocaleTimeString()}
      {lastOperationSpan}
      </footer>
  );
};

const mapStateToProps = (state, { id }) => {
  const { percentage, operations, date, is_open } = getPropsForItem(state, id);
  if (operations !== undefined && operations.length !== 0) {
    return {
      is_open,
      percentage,
      date,
      lastOperation: operations[0]
    }
  }
  return {
    percentage,
    date,
    lastOperation: null
  };
};


export default connect(mapStateToProps)(ItemFooter);
