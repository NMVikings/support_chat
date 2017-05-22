import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import  send from '../../images/mingle-share.svg';

const SendOperationToMessageButton = ({ sendOperation }) => {
  return (
    <img src={send} className="operation__message-icon" onClick={sendOperation} />
  )
};

const mapStateToProps = ({ admin, tab }) => ({ admin, tab });

const mergeProps = ({ admin, tab }, { dispatch }, {operationId, itemId}) => ({
  sendOperation() {
    dispatch(addMessage({...admin, date: new Date(), content: {tab: tab, itemId: itemId, operationId: operationId}}))
  }
});


export default connect(mapStateToProps, null, mergeProps)(SendOperationToMessageButton);