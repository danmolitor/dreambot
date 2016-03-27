import React from 'react';
import { connect } from 'react-redux';

import { notify } from '../actions';
import Test from '../components/Test';

const TestContainer = React.createClass({
  act() {
    if (!this.n) {
      this.n = 1;
    }
    this.props.dispatch(notify(`This is message ${this.n}`, 'error'));
    this.n++;
  },

  render() {
    return (
      <div>
        <Test {...this.props} />
        <button onClick={this.act}>act</button>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TestContainer);
