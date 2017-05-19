import React from 'react';
import { connect } from 'react-redux';
import DateBlock from '../components/DateBlock';

const ChatWrapper = ({ messages, keys }) => {
  return (
    <div>
      {keys.map(key => <DateBlock key={key} date={key} messageList={messages[key]} />)  }
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