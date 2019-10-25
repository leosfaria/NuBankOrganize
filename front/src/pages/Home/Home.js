import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { report } from '../../mock/report';

const generateHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const money = value => {
  return value && 'R$ ' + parseFloat(value)
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

const months = Object.keys(report).map(key => ({
  label: key,
  chartData: {
    labels: report[key].tags.map(tag => tag.description),
    datasets: [{
      data: report[key].tags.map(tag => tag.amount),
      backgroundColor: report[key].tags.map(tag => generateHexColor())
    }]
  },
  chartOptions: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const amounts = data.datasets[tooltipItem.datasetIndex].data;
          console.log(tooltipItem);
        }
      }
    }
  }
}));

export const Home = props => {
  return (
    <div>
      {months.map(month => (
        <div key={month.label} style={{width: "50%", height: "50%"}}>
          <h3>{month.label}</h3>
          <Doughnut data={month.chartData} options={month.chartOptions} />
        </div>
      ))}
    </div>
  )
}
