import React from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../../actions';
import { getKeys, getActiveId } from '../../reducers';
import TabSelector from '../../components/TabSelector/TabSelector';
import ItemsList from '../ItemsList/ItemsList';
import OperationsList from '../OperationsList/OperationsList'
import './Sidebar.css'

const Sidebar = ({ keys, activeId, ...props}) => {
  return (
    <div className="sidebar">
      <TabSelector {...props} />
      {
        (activeId.length === 0) ?
          <ItemsList keys={keys} /> :
          <OperationsList id={activeId} />
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAccountTabActive: state.tab === 'accounts',
  keys: getKeys(state),
  activeId: getActiveId(state)
});

const mapDispatchToProps = ( dispatch ) => ({
  setAccountTab() {
    dispatch(changeTab('accounts'))
  },
  setDepositTab() {
    dispatch(changeTab('deposits'))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);