import { connect } from 'react-redux';
import { addMessage } from '../../actions/index';
import React from 'react';
import './SubmitButton.css';
import Button from '../Button/Button';


const SendMessageButton = ({ isDisabled = false, sendMessage, children = ''}) => (
    <Button onClick={sendMessage}
            isDisabled={isDisabled}
            classString="message-form__btn"
            >
      {children}
    </Button>
);

const mapStateToProps = ({ input, admin }) => ({
    message: {
      content: input,
      ...admin
    },
    isDisabled: input.length === 0
});

const mergeProps = ({ message, isDisabled }, { dispatch }, ownProps) => ({
    ...ownProps,
    isDisabled,
    sendMessage: (e) => {
      e.preventDefault();
      dispatch(addMessage({...message, date: new Date()}));
    }
});

export default connect(mapStateToProps, null, mergeProps)(SendMessageButton);