import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { FullWidthContainer, Sidebar, MainContentContainer } from '../../components';

import { buildChartData } from '../../helpers';
import { report } from '../../mock/report';

const expensesData = buildChartData(report);

export const Home = props => {
  return (
    <FullWidthContainer>
      <Sidebar />
      <MainContentContainer></MainContentContainer>
    </FullWidthContainer>
  )
};
