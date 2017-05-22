import React from 'react';
import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';
import { connect } from 'react-redux';
import { getPropsForItem } from '../../reducers/sidebar';
import './Item.css';

const Item = ({ propsForFooter, propsForHeader, isEven }) => {
  return (
    <div className={`item ${isEven ? 'item_even' : 'item_odd'}`}>
      <ItemHeader {...propsForHeader} />
      <ItemFooter {...propsForFooter} />
    </div>
  );
};

const mapStateToProps = ({ sidebar }, { id }) => {
  return getPropsForItem(sidebar, id);
};

export default connect(mapStateToProps)(Item);