import React from 'react';
import { connect } from 'react-redux';
import BarGraph from '../components/BarGraph';


const mapStateToProps = (state) => {

  return {
    labels: ['hi', 'hello', 'three', 'four', 'five'],
    data: [12, 19, 3, 5, 2]
  };
};


export default connect(mapStateToProps)(BarGraph);