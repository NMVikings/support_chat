import React from 'react';

const ItemsList = ({ isAccountTabActive }) => (
    <div>
      {isAccountTabActive ? 'account' : 'deposit'}
    </div>
);

export default ItemsList;