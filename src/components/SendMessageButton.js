import { connect } from 'react-redux';
import { addMessage } from '../actions/index';
import React from 'react';


const Button = ({ isDisabled = false, message, sendMessage, children = ''}) => {
  return (
    <button
      onClick={() => sendMessage({...message, date: new Date()})}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

const mapStateToProps = ({ input, admin }) => {
  return {
    message: {
      content: input,
      ...admin
    },
    isDisabled: input.length === 0
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    sendMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Button);