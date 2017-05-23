import React from 'react';
import CurrencySign from '../../components/CurrencySign/CurrencySign';
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
                 className="icon item__dropdown-icon"
                 onClick={toggleVisibility}
                 alt="icon"
            /> :
            ''
        }
      </div>
      <div className="item__money">{amount} <CurrencySign currency={currency}/></div>
    </header>
  )
};


export default ItemHeader;
