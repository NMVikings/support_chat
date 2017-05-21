import React from 'react';
import { connect } from 'react-redux';
import DateBlock from '../../components/DateBlock/DateBlock';
import './Chat.css';
import { Scrollbars } from 'react-custom-scrollbars';

const ChatWrapper = ({ messages, keys }) => (
  // const isOverflown = () => {
  //   if (document.getElementsByClassName('chat__date-block').length !== 0) {
  //     const chat_blocks = [].slice.call(document.getElementsByClassName('chat__date-block'));
  //     const scrollHeight = chat_blocks.reduce((acc, e) => acc + e.clientHeight, 0);
  //     const clientHeight = 500;
  //
  //     return scrollHeight > clientHeight;
  //   }
  //   return false;
  // };

  // {`track-vertical ${isOverflown() ? '' : 'track-vertical_inactive'}`} in className of renderTrackVertical
  //
  //
  // or add autoHide

    <div className="chat">
      <Scrollbars
        autoHide
        autoHideTimeout={60000}
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