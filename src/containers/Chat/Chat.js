import React from 'react';
import { connect } from 'react-redux';
import DateBlock from '../../components/DateBlock/DateBlock';
import './Chat.css';
import { Scrollbars } from 'react-custom-scrollbars';

const ChatWrapper = ({ messages, keys }) => (
    <div className="chat">
      <Scrollbars
        autoHide
        autoHideTimeout={2000}
        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
        renderTrackVertical={props => <div {...props} className="track-vertical" />}
      >
        {keys.map(key => <DateBlock key={key} date={key} messageList={messages[key]} />)  }
      </Scrollbars>
    </div>
);

const mapStateToProps = ({ messages }) => ({
    messages,
    keys: Object.keys(messages)
});

export default connect(mapStateToProps)(ChatWrapper);