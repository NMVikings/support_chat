import React from 'react';
const toop = () => {};
const Button = ({ isDisabled = false, onClick = toop, children = []}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;