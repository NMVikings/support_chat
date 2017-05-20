import React from 'react';

const ItemsList = ({ isAccountTabActive }) => {
  return (
    <div>
      {isAccountTabActive ? 'account' : 'deposit'}
    </div>
  )
};

export default ItemsList;