import React from 'react';
import './Button.css';

const toop = () => {};
const Button = ({ isDisabled = false, onClick = toop, children = [], classString=''}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className= {`btn ${classString}`}
    >
      {children}
    </button>
  );
};

export default Button;