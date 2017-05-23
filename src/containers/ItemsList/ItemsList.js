import React from 'react';
import Item from '../../components/Item/Item';

const ItemsList = ({ keys, tab }) => (
  <div className="item-list">
    {keys.map((key, index) =>
      <Item key={key}
            isEven={index % 2 === 0}
            id={key}
            tab={tab}
      />
    )}
  </div>
);

export default ItemsList;