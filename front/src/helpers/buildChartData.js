import { generateHexColor } from './hexColor';
import { money } from './money';
import { translateKey } from './translateKey';

export const buildChartData = report => {
  return Object.keys(report).map(key => ({
    period: translateKey(key),
    chartData: {
      labels: report[key].tags.map(tag => tag.description),
      datasets: [{
        data: report[key].tags.map(tag => {
          const formatted = tag.amount.toString().slice(0, -2) + '.' + tag.amount.toString().slice(-2);
          return parseFloat(formatted);
        }),
        backgroundColor: report[key].tags.map(tag => generateHexColor())
      }]
    },
    chartOptions: {
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const label = data.labels[tooltipItem.index];
            const value = money(data.datasets[0].data[tooltipItem.index]);

            return ` ${label}: ${value}`;
          }
        }
      }
    }
  }));
}
