import React from 'react';
import { Bar as BarChart } from 'react-chartjs';
import styles from '../styles';

// USING REACT-CHARTJS

const BarGraph = ({labels = [], data = [], width='500', height='500'} ) => {
  const dataOptions = {
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:true
        }
      }]
    }
  }
  const dataset = {
      labels: labels,
      datasets: [
        {
          label: "Questions",
          fill: false,
          backgroundColor: "rgba(220,220,220, 1)",
          borderColor: "rgba(220,220,220,1)",
          data: data
        }
      ],
    };
      return (
      <BarChart style={styles.graph} data={dataset} options={dataOptions} width={width} height={height}/>
    )
}

export default BarGraph;
