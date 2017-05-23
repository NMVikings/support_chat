import React from 'react';
import { toggleOperationListVisibility } from '../../actions';
import { connect } from 'react-redux';
import maximize from '../../images/maximize.svg';
import close from '../../images/close.svg';

const ItemHeader = ({ title, tab, amount, currency, is_open, toggleVisibility }) => {
  return (
    <header className="item__header">
      <div className="item__title">
        {title}
        {
          tab === 'accounts' ?
            <img src={is_open ? close : maximize}
                 className="item__dropdown-icon"
                 onClick={toggleVisibility}
                 alt="icon"
            /> :
            ''
        }
      </div>
      <div className="item__money">{amount} {currency}</div>
    </header>
  )
};

const mapDispatchToProps = (dispatch, { id }) => ({
  toggleVisibility(e) {
    e.preventDefault();
    dispatch(toggleOperationListVisibility(id))
  }
});

export default connect(null, mapDispatchToProps)(ItemHeader);
