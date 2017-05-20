import React from 'react';
import { connect } from 'react-redux';
import { editMessage, addMessage } from '../../actions/index';
import './MessageInput.css';

const MessageInput = ({ value, editMessage, sendMessage }) => {
  return (
    <textarea className="message-form__input"
              type="text" value={value}
              onChange={editMessage}
              onKeyDown={sendMessage}
              placeholder='Сообщение'
              rows='6'
    />
  )
};
const mapStateToProps = ({ input, admin }) => {
  return {
    value: input,
    admin
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    editMessage: (e) => {
      dispatch(editMessage(e.target.value));
    },
    dispatch
  }
};

const mergeProps = ({ admin, value }, { dispatch, editMessage } ) => {
  return {
    value,
    editMessage,
    sendMessage: (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        dispatch(addMessage({...admin, content: e.target.value, date: new Date()}));
        e.preventDefault();
      }
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MessageInput);


