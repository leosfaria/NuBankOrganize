import React, { Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';

import {
  FullWidthContainer,
  MainContentContainer,
  GridContainer,
  Sidebar,
  SidebarItem,
  Card
} from '../../components';

import { ReactComponent as Triangle } from '../../assets/img/triangle.svg'

import { buildChartData } from '../../helpers';
import { report } from '../../mock/report';

const expensesData = buildChartData(report);

export const Home = props => {
  return (
    <Fragment>
      {/* <Triangle className="triangle-bg" /> */}

      <FullWidthContainer>
        <Sidebar>
          <SidebarItem title="Resumo" icon="home" href="/" />
          <SidebarItem title="Detalhes" icon="details" href="/details" />
        </Sidebar>

        <MainContentContainer>
          <h1>Resumo</h1>

          <GridContainer>
            <Card>
              <h2>Gasto atual</h2>
              <p>R$ 3.000,00</p>
            </Card>

            <Card>
              <h2>Tag com maior gasto</h2>
              <p>#funko</p>
            </Card>

            <Card>
              <h2>Próxima fatura</h2>
              <p>R$ 1.337,69</p>
            </Card>
          </GridContainer>
        </MainContentContainer>
      </FullWidthContainer>
    </Fragment>
  )
};
