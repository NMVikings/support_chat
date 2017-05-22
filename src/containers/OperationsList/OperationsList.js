import React from 'react';
import { connect } from 'react-redux';
import { getItemOperations } from '../../reducers';
import './OperationsList.css';

import Item from '../../components/Item/Item';
import OperationItem from '../OperationItem/OperationItem';

const OperationsList = ({ id, operations }) => {
  return (
    <div className="operations">
      <Item id={id} isEven={true} />
      <div className="operations__list">
        <div className="operations__title">История операций</div>
        {operations.map((data, index) =>
          <OperationItem key={data.id}
                         id={id}
                         data={data}
                         isEven={index % 2 === 0}
          />
        )}
      </div>
    </div>
  )
};

const mapStateToProps = (state, { id }) => {
  return getItemOperations(state, id)
};




export default connect(mapStateToProps)(OperationsList);