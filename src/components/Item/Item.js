import React from 'react';
import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';
import { connect } from 'react-redux';
import { getPropsForItem } from '../../reducers/sidebar';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ propsForLink, propsForFooter, propsForHeader, isEven }) => {
  return (
    <Link to={`/${propsForLink.tab}`} >
      <div className={`item ${isEven ? 'item_even' : 'item_odd'}`}>
        <ItemHeader {...propsForHeader} />
        <ItemFooter {...propsForFooter} />
      </div>
    </Link>
  );
};

const mapStateToProps = ({ sidebar }, { id }) => {
  return getPropsForItem(sidebar, id);
};

export default connect(mapStateToProps)(Item);