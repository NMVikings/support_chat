import React from 'react';
import { connect } from 'react-redux';
import { editMessage } from '../../actions/index';
import './MessageInput.css';

const MessageInput = ({ value, editMessage }) => {
  return (
    <textarea className="message-input"
              type="text" value={value}
              onChange={editMessage}
              placeholder='Сообщение'
              rows='6'
    />
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


