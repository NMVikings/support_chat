import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/index';
import  send from '../../images/mingle-share.svg';

const SendOperationToMessageIcon = ({ sendOperation }) => {
  return (
    <img src={send} alt="send-icon" className="icon operation__message-icon" onClick={sendOperation} />
  )
};

const mapStateToProps = ({ admin }) => ({ admin });

const mergeProps = ({ admin, tab }, { dispatch }, {operationId, itemId}) => ({
  sendOperation() {
    dispatch(
      addMessage({
        ...admin,
        content: {itemId: itemId, operationId: operationId}
      })
    )
  }
});


export default connect(mapStateToProps, null, mergeProps)(SendOperationToMessageIcon);