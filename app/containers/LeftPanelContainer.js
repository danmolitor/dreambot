import React from 'react';
import { connect } from 'react-redux';
import LeftPanel from '../components/LeftPanel';
import { addMessage } from '../actions/index';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    printMessage: () => {
      // TODO: replace placeholder to fire actions
      console.log('hello');
      // dispatch(addMessage('Hello from container'));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);