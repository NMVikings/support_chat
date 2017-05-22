import React from 'react';
import Operation from '../Operation/Operation';
import './MessageItem.css';
import { getOperation } from '../../reducers';
import { connect } from 'react-redux';

const MessageItem = ({ name, content, role, image} ) => {
  // let messageContent = content;
  // if (typeof(content) === 'string') {
  //   messageContent = content.split('\n')
  //     .filter(e => !!e)
  //     .map((item, key) =>
  //       (<span key={key}>{item}<br/></span>)
  //     );
  // } else if (content instanceof Object) {
  //
  // }
  const classString = (role === 'Admin') ?
    'chat__message chat__message_reverse' :
    'chat__message';

  return (
    <div className={classString}>
      <div className="chat__avatar">
        <img src={image} alt="avatar"/>
      </div>
      {content}
    </div>
  )
};

const mapStateToProps = (state, { data }) => {
  const { content } = data;
  if (typeof(content) !== 'string') {
    return {
      content: getOperation(state, content)
    }
  }
  return {};
};

const mergeProps = ( { content }, dispatchProps, { data } ) => {
  if (content !== undefined) {
    return { ...data, content: (
      <div className="chat__message-content chat__message-content_with-operation">
        <div className="chat__operation-title">Операция</div>
        <Operation {...content} />
      </div>
    )}
  }
  return {...data, content: (
    <div className="chat__message-content">
      <span className="chat__message-author">{data.name}: </span>
      {data.content}
    </div>
  )};
};

export default connect(mapStateToProps, null, mergeProps)(MessageItem);