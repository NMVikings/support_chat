import React from 'react';
import { connect } from 'react-redux';
import { getActiveAccountOperations } from '../../reducers/sidebar';
import './OperationsList.css';

import Item from '../../components/Item/Item';
import OperationItem from '../OperationItem/OperationItem';

const OperationsList = ({ id, operations, tab }) => {
  return (
    <div className="operations">
      <Item id={id} tab={tab} isEven={true} />
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

const mapStateToProps = ({ sidebar }) => {
  return {
    operations: getActiveAccountOperations(sidebar)
  }
};




export default connect(mapStateToProps)(OperationsList);