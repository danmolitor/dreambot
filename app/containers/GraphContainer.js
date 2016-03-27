import React from 'react';
import { connect } from 'react-redux';
import Graph from '../components/Graph';
import _ from 'lodash';
// import d3 from 'd3';

// const GraphContainer = React.createClass({
//   render: function() {

//     return (
//       <Graph labels={this.props.labels} data={this.props.data} dataAvg={this.props.dataAvg}/>
//     )
//   }
// })

const mapStateToProps = (state) => {
  let reverseState = Object.assign({}, state);
  const comparator = (a, b) => { return new Date(a.ts) - new Date(b.ts) };
  reverseState.messages.messages.sort(comparator);

  let messageByHours = [];

  for (var i = 0; i < 24; i ++) {
    messageByHours.push({ hour: i, count: 0 });
  }
  for(var i = 0; i < reverseState.messages.messageVolume.length; i++){
    messageByHours[reverseState.messages.messageVolume[i].group].count = reverseState.messages.messageVolume[i].reduction;
  }

  return {
    barChartDatasets: messageByHours.map(item => item.count),
    labels: reverseState.messages.messages.map(message => new Date(message.ts).toLocaleString()),
    data: reverseState.messages.messages.map(message => message.score),
    dataAvg: reverseState.messages.messages.map(message => message.comparative)
  };
};


export default connect(mapStateToProps)(Graph);

