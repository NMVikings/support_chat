import React from 'react';
import { connect } from 'react-redux';
import { getActiveAccountId } from '../../reducers/sidebar';
import { Link }  from 'react-router-dom';
import Item from '../../components/Item/Item';
import OperationsList from '../OperationsList/OperationsList'

const AccountPage = ({ match, activeTab }) => {
  const id = match.params.id;
  return (
    <div className="page">
      {
        activeTab === id ?
          <OperationsList id={id} /> :
          <Item id={id} isEven={true} />
      }
      <div className="page__btn-wrapper">
        <button className="btn btn_big">
          <Link to="/chat">
            Back to Chat
          </Link>
        </button>
      </div>
    </div>
  )
};

const mapStateToProps = ({ sidebar }) => {
  return {
    activeTab: getActiveAccountId(sidebar)
  }
};

export default connect(mapStateToProps)(AccountPage);