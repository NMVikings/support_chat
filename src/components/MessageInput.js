import React from 'react';
import { connect } from 'react-redux';

class MessageInput extends React.Component  {
  render() {
    return (
      <input type="text" />
    )
  }
}

export default connect()(MessageInput);


