import React from 'react';
import { connect } from 'react-redux';
import VolumeGraph from '../components/VolumeGraph';

const mapStateToProps = (state) => {
  // create an array plotting 24 hours
  let messageByHours = [];
  for (var i = 0; i < 23; i ++) {
    messageByHours.push({ hour: i, count: 0 });
  }
  state.messageVolume.forEach(item => {
    messageByHours[item[group]].count = item['reduction'];
  });

  return {
    labels: messageByHours.map((item , i) => i),
    data: messageByHours.map(item => item.count),
  };
};


export default connect(mapStateToProps)(VolumeGraph);