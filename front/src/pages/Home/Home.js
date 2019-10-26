import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { buildChartData } from '../../helpers';
import { report } from '../../mock/report';

const expensesData = buildChartData(report);

export const Home = props => {
  return (
    <div>
      {expensesData.map((expense, i) => (
        <div key={i} style={{ width: "50%", height: "50%" }}>
          <h3>{expense.period}</h3>

          <Doughnut
            data={expense.chartData}
            options={expense.chartOptions}
          />
        </div>
      ))}
    </div>
  )
};
