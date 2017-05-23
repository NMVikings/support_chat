import React from 'react';
const CurrencySign = ({ currency }) => {
  switch (currency) {
    case "RUB":
      return <span>₽</span>;
    case "EUR":
      return <span>&#8364;</span>;
    case "USD":
      return <span>$</span>;
    default:
      return <span>{currency}</span>
  }
};

export default CurrencySign;