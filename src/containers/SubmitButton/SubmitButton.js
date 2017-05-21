import React from 'react';
import './SubmitButton.css';
import Button from '../../components/Button/Button';


const SendMessageButton = ({ isDisabled = false, sendMessage, children = ''}) => (
    <Button onClick={sendMessage}
            isDisabled={isDisabled}
            classString="message-form__btn"
            >
      {children}
    </Button>
);

export default SendMessageButton;