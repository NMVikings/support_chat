import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/index';
import MessageInput from '../../components/MessageInput/MessageInput';
import Button from '../../components/Button/Button';
import './MessageForm.css';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const sendMessageByButton = this.props.sendMessageByButton.bind(this);
    const sendMessageByKeyDown = this.props.sendMessageByKeyDown.bind(this);
    const { value } = this.state;

    return (
      <form className="message-form">
        <h1 className="message-form__title">Чат</h1>
        <MessageInput
          sendMessage={sendMessageByKeyDown}
          editMessage={this.editMessage}
          value={value}
        />
        <Button
          isDisabled={value.length === 0}
          onClick={sendMessageByButton}
          classString="message-form__btn"
        >
          Отправить
        </Button>
      </form>
    );
  }

  editMessage = (e) => {
    this.setState({
      value: e.target.value
    })
  };
}

const mapStateToProps = ({ roles }) => ({ admin: roles.admin });

const mergeProps = ({ admin }, { dispatch } ) => {
  function sendMessage(e) {
    e.preventDefault();
    const value = this.state.value.trim();
    if (value.length !== 0) {
      dispatch(addMessage({...admin, content: value}));
    }
    this.setState({
      value: ''
    });
  }

  return {
    sendMessageByKeyDown(e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        sendMessage.call(this, e);
      }
    },
    sendMessageByButton: function(e) { sendMessage.call(this, e) }
  }
};

export default connect(mapStateToProps, null, mergeProps)(MessageForm);