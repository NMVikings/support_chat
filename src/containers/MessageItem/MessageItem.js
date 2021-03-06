import React from 'react';
import Operation from '../../components/Operation/Operation';
import './MessageItem.css';
import { getOperation } from '../../reducers/sidebar';
import { connect } from 'react-redux';

const MessageItem = ({  content, role }) => {
  const classString = (role === 'Admin') ?
    'chat__message chat__message_reverse' :
    'chat__message';

  return (
    <div className={classString}>
      <div className="chat__avatar">
        <img src={require(`../../images/${role}.jpg`)} alt="avatar"/>
      </div>
      {content}
    </div>
  )
};

const mapStateToProps = ({ sidebar }, { data }) => {
  const { content } = data;
  if (typeof(content) !== 'string') {
    return {
      content: getOperation(sidebar, content)
    }
  }
  return {};
};

const mergeProps = ({ content }, dispatchProps, { data }) => {
  // Отображение операции в сообщениях
  if (content !== undefined) {
    return { ...data, content: (
      <div className="chat__message-content chat__message-content_with-operation">
        <div className="chat__operation-title">Операция</div>
        <Operation {...content} />
      </div>
    )}
  }

  // Отоборажение многострочных сообщений
  return {...data, content: (
    <div className="chat__message-content">
      <span className="chat__message-author">{data.name}: </span>
      {data.content.split('\n').filter(e => !!e.trim()).map((item, key) => {
        return <span key={key}>{item}<br/></span>
      })}
    </div>
  )};
};

export default connect(mapStateToProps, null, mergeProps)(MessageItem);