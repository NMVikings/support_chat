import React from 'react';
import { Link }  from 'react-router-dom';
import Item from '../../components/Item/Item';

const DepositPage = ({ match }) => {
  const id = match.params.id;
  return (
    <div className="page">
      <Item id={id} tab="deposits" isEven={true} />
      <div className="page__btn-wrapper">
        <Link to="/" className="btn btn_big">
          <span>Back to Chat</span>
        </Link>
      </div>
    </div>
  )
};


export default DepositPage;