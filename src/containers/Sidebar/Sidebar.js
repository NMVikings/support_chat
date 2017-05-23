import React from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../../actions';
import { getSidebarData } from '../../reducers/sidebar';
import TabSelector from '../../components/TabSelector/TabSelector';
import ItemsList from '../ItemsList/ItemsList';
import OperationsList from '../OperationsList/OperationsList'
import './Sidebar.css'

const Sidebar = ({ keys, activeId, activeTab, ...props}) => {
  console.log(activeTab);
  return (
    <div className="sidebar">
      <TabSelector {...props} />
      {
        (activeId !== '' && activeTab === 'accounts') ?
          <OperationsList id={activeId} tab={activeTab} /> :
          <ItemsList keys={keys} tab={activeTab} />
      }
    </div>
  );
};

const mapStateToProps = ({ sidebar }) => getSidebarData(sidebar);

const mapDispatchToProps = ( dispatch ) => ({
  setAccountTab() {
    dispatch(changeTab('accounts'))
  },
  setDepositTab() {
    dispatch(changeTab('deposits'))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);