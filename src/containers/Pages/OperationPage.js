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
        <button className="btn btn_big">
          <Link to="/chat">
            Back to Chat
          </Link>
        </button>
        <button className="btn btn_big">
          <Link to={`/accounts/${match.params.itemId}`}>
            Back to Account
          </Link>
        </button>
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