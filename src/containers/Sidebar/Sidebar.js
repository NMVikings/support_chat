import React from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../../actions';
import TabSelector from '../../components/TabSelector/TabSelector';
import ItemsList from '../ItemsList/ItemsList';
import './Sidebar.css'

const Sidebar = (props) => {
  const { isAccountTabActive } = props;
  return (
    <div className="sidebar">
      <TabSelector {...props}/>
      <ItemsList isAccountTabActive={isAccountTabActive} />
    </div>
  )
};

const mapStateToProps = ({ tab }) => {
  return {
    isAccountTabActive: tab === 'account'
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    setAccountTab: () => {
      dispatch(changeTab('account'))
    },
    setDepositTab: () => {
      dispatch(changeTab('deposit'))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);