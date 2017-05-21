import React from 'react';
import Item from '../../components/Item/Item';

const ItemsList = ({ keys }) => (
  <div className="item-list">
    {keys.map((key, index) =>
      <Item key={key}
            isEven={index % 2 === 0}
            id={key}
      />
    )}
  </div>
);

export default ItemsList;