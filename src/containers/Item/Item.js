import React from 'react';
import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';
import { toggleOperationListVisibility } from '../../actions/index';
import { connect } from 'react-redux';
import { getPropsForItem } from '../../reducers/sidebar';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ propsForLink, propsForFooter, propsForHeader, toggleVisibility, isEven }) => {
  return (
    <Link to={`/${propsForLink.tab}/${propsForLink.id}`} >
      <div className={`item ${isEven ? 'item_even' : 'item_odd'}`}>
        <ItemHeader {...propsForHeader} toggleVisibility={toggleVisibility} />
        <ItemFooter {...propsForFooter} />
      </div>
    </Link>
  );
};

const mapStateToProps = ({ sidebar }, { id, tab }) => {
  return getPropsForItem(sidebar, tab, id);
};

const mapDispatchToProps = (dispatch, { id }) => ({
  toggleVisibility(e) {
    e.preventDefault();
    dispatch(toggleOperationListVisibility(id))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Item);