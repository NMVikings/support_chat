import React from 'react';
import { connect } from 'react-redux';
import { getItemOperations } from '../../reducers';

import Item from '../../components/Item/Item';
import OperationItem from '../OperationItem/OperationItem';

const OperationsList = ({ id, operations }) => {
  return (
    <div className="operations-list">
      <Item id={id} isEven={true} />
      {operations.map((data, index) => <OperationItem key={data.id} data={{...data, isEven: index % 2 === 0}} />)}
    </div>
  )
};

const mapStateToProps = (state, { id }) => {
  return getItemOperations(state, id)
};




export default connect(mapStateToProps)(OperationsList);