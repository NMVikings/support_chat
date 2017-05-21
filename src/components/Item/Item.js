import React from 'react';
import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';
import './Item.css';

const Item = ({ id, isEven }) => {
  return (
    <div className={`item ${isEven ? 'item_even' : 'item_odd'}`}>
      <ItemHeader id={ id } />
      <ItemFooter id={ id } />
    </div>
  );
};


export default Item;