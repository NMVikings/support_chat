import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import  send from '../../images/mingle-share.svg';

const SendOperationToMessageButton = ({ sendOperation }) => {
  return (
    <img src={send} alt="send-icon" className="operation__message-icon" onClick={sendOperation} />
  )
};

const mapStateToProps = ({ admin }) => ({ admin });

const mergeProps = ({ admin, tab }, { dispatch }, {operationId, itemId}) => ({
  sendOperation() {
    dispatch(
      addMessage({
        ...admin,
        date: new Date(),
        content: {itemId: itemId, operationId: operationId}
      })
    )
  }
});


export default connect(mapStateToProps, null, mergeProps)(SendOperationToMessageButton);