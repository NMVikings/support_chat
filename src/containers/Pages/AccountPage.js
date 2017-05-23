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
          <OperationsList id={id} tab="accounts"/> :
          <Item id={id} tab="accounts" isEven={true} />
      }
      <div className="page__btn-wrapper">
        <Link to="/" className="btn btn_big">
          Back to Chat
        </Link>
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