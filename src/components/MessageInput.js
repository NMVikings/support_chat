import React from 'react';
import { connect } from 'react-redux';
import { editMessage } from '../actions';

const MessageInput = ({ value, editMessage }) => {
  return (
    <input type="text" value={value} onChange={editMessage} />
  )
};
const mapStateToProps = ({ input }) => {
  return {
    value: input
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    editMessage: (e) => {
      dispatch(editMessage(e.target.value))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);


