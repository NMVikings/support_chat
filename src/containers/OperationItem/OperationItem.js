import React from 'react';
import Operation from '../../components/Operation/Operation';
import SendOperationToMessageButton from '../../components/SendOperationToMessageButton/SendOperationToMessageButton'
import './OperationItem.css';

const OperationItem = ({ id, isEven, data }) => {
  return (
    <div className={`operation__item ${isEven ? 'operation__item_even' : 'operation__item_odd'}`}>
      <Operation {...data} />
      <SendOperationToMessageButton operationId={data.id} itemId={id} />
    </div>
  );
};

export default OperationItem;