import React from 'react';
import Operation from '../../components/Operation/Operation';
import SendOperationToMessageButton from './SendOperationToMessageIcon'
import './OperationItem.css';

const OperationItem = ({ id, isEven, data }) => {
  return (
    <div className={`operation__item ${isEven ? 'operation__item_even' : 'operation__item_odd'}`}>
      <Operation {...data} itemId={id} />
      <SendOperationToMessageButton operationId={data.id} itemId={id} />
    </div>
  );
};

export default OperationItem;