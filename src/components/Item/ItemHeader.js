import React from 'react';
import { toggleOperationListVisibility } from '../../actions';
import { connect } from 'react-redux';
import { getPropsForItem } from '../../reducers';
import maximize from '../../images/maximize.svg';
import close from '../../images/close.svg';

const ItemHeader = ({ id, name, amount, currency, is_open, toggleVisibility }) => {
  const title = (name === undefined) ? `Счет № ${id}` : name;
  return (
    <header className="item__header">
      <div className="item__title">
        {title}
        <img src={is_open ? close : maximize}
             className="item__dropdown-icon"
             onClick={toggleVisibility}
        />
      </div>
      <div className="item__money">{amount} {currency}</div>
    </header>
  )
};

const mapStateToProps = (state, { id }) => {
  const { name, amount, currency, is_open, tab } = getPropsForItem(state, id);
  return {
    name,
    amount,
    currency,
    is_open,
    tab
  }
};

const mergeProps = ({ tab, ...data }, { dispatch }, { id }) => {
  return {
    ...data,
    id,
    toggleVisibility() {
      dispatch(toggleOperationListVisibility(tab, id))
    }
  }
};

export default connect(mapStateToProps, null, mergeProps)(ItemHeader);
