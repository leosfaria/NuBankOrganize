import React, { Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';

import {
  FullWidthContainer,
  MainContentContainer,
  Sidebar,
  SidebarItem
} from '../../components';
import { ReactComponent as Triangle } from '../../assets/img/triangle.svg'

import { buildChartData } from '../../helpers';
import { report } from '../../mock/report';

const expensesData = buildChartData(report);

export const Home = props => {
  return (
    <Fragment>
      <Triangle className="triangle-bg" />

      <FullWidthContainer>
        <Sidebar>
          <SidebarItem title="Resumo" icon="home" href="/" />
          <SidebarItem title="Detalhes" icon="details" href="/details" />
        </Sidebar>

        <MainContentContainer>
          <h1>Resumo</h1>
        </MainContentContainer>
      </FullWidthContainer>
    </Fragment>
  )
};
