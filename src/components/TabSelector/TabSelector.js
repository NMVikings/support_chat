import React from 'react';
import './TabSelector.css';
import Button from '../Button/Button';

const TabSelector = ({ setAccountTab, setDepositTab, isAccountTabActive }) => {

  return (
    <div className="tab-selector">
      <Button
        classString={`btn_big ${isAccountTabActive ? '' : 'btn_invert-colors'}`}
        onClick={setAccountTab}
        isDisabled={isAccountTabActive}
      >
        Счета
      </Button>
      <Button
        classString={`btn_big ${!isAccountTabActive ? '' : 'btn_invert-colors'}`}
        onClick={setDepositTab}
        isDisabled={!isAccountTabActive}
      >
        Вклады
      </Button>
    </div>
  )
};

export default TabSelector;