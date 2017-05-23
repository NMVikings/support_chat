import React from 'react';
import { Link }  from 'react-router-dom';
import Item from '../../components/Item/Item';

const DepositPage = ({ match }) => {
  const id = match.params.id;
  return (
    <div className="page">
      <div className="page__content">
        <Item id={id} tab="deposits" isEven={true} />
      </div>
      <div className="page__btn-wrapper">
        <Link to="/" className="btn btn_big">
          <span>Назад</span>
        </Link>
      </div>
    </div>
  )
};


export default DepositPage;