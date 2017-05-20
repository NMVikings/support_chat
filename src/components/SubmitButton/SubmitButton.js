import { connect } from 'react-redux';
import { addMessage } from '../../actions/index';
import React from 'react';
import './SubmitButton.css';
import Button from '../Button/Button';


const SendMessageButton = ({ isDisabled = false, message, sendMessage, children = ''}) => {
  return (
    <Button onClick={() => sendMessage({...message, date: new Date()})}
            isDisabled={isDisabled}
            classString="message-form__btn"
            >
      {children}
    </Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(SendMessageButton);