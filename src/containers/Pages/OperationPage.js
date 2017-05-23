import React from 'react';
import { connect } from 'react-redux';
import { getOperation } from '../../reducers/sidebar';
import { Link }  from 'react-router-dom';
import Operation from '../../components/Operation/Operation';

const OperationPage = ({ match, operation }) => {
  return (
    <div className="page">
      <div className="page__content">
        <div className="chat__message-content chat__message-content_with-operation">
          <div className="chat__operation-title">Операция</div>
          <Operation {...operation} />
        </div>
      </div>
      <div className="page__btn-wrapper">
        <Link to="/" className="btn btn_big">
          Назад в чат
        </Link>
        <Link to={`/accounts/${match.params.itemId}`} className="btn btn_big">
          Назад в счёт
        </Link>
      </div>
    </div>
  )
};
const mapStateToProps = ({ sidebar }, { match }) => {
  return {
    operation: getOperation(sidebar, {itemId: match.params.itemId, operationId: match.params.operationId })
  }
};
export default connect(mapStateToProps)(OperationPage);