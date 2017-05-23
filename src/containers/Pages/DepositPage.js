import React from 'react';
import { Link }  from 'react-router-dom';
import Item from '../../components/Item/Item';

const DepositPage = ({ match }) => {
  const id = match.params.id;
  return (
    <div className="page">
      <Item id={id} isEven={true} />
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


export default DepositPage;