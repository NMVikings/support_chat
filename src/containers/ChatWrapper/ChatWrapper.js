import React from 'react';
import { connect } from 'react-redux';
import DateBlock from '../../components/DateBlock/DateBlock';
import './ChatWrapper.css';

const ChatWrapper = ({ messages, keys }) => {
  return (
    <div className="chat-wrapper">
      <div className="chat-content">
        {keys.map(key => <DateBlock key={key} date={key} messageList={messages[key]} />)  }
      </div>
    </div>
  )
};

const mapStateToProps = ({ messages }) => {
  return {
    messages,
    keys: Object.keys(messages)
  }
};

export default connect(mapStateToProps)(ChatWrapper);