import React from 'react';
import Operation from '../../components/Operation/Operation'

const OperationItem = ({ data }) => (
  <div>
    <Operation {...data} />
  </div>
);

export default OperationItem;