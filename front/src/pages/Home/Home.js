import React, { Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Columns, Content } from 'react-bulma-components';

import {
  FullWidthContainer,
  MainContentContainer,
  Sidebar,
  SidebarItem,
  Card
} from '../../components';

import { ReactComponent as Triangle } from '../../assets/img/triangle.svg'
import moneyImg from '../../assets/img/icons/money.png';
import priceTagImg from '../../assets/img/icons/price-tag.png';
import calendarImg from '../../assets/img/icons/calendar.png';

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
          <Content>
            <h1>Resumo</h1>

            <Columns>
              <Columns.Column>
                <Card icon={moneyImg}>
                  <h2>Gasto atual</h2>
                  <p>R$ 3.000,00</p>
                </Card>
              </Columns.Column>

              <Columns.Column>
                <Card icon={priceTagImg}>
                  <h2>Tag com maior gasto</h2>
                  <p>#funko</p>
                </Card>
              </Columns.Column>

              <Columns.Column>
                <Card icon={calendarImg}>
                  <h2>Próxima fatura</h2>
                  <p>R$ 1.337,69</p>
                </Card>
              </Columns.Column>
            </Columns>

            <Columns>
              <Columns.Column size={8}>
                <Card>
                  <h2>Gastos por tags</h2>

                  <div style={{ width: "100%", height: "1000%" }}>
                    <Doughnut data={expensesData[0].chartData} options={expensesData[0].chartOptions} />
                  </div>
                </Card>
              </Columns.Column>

              <Columns.Column size={4}>
                <Card>
                  <h2>Últimas compras do mês</h2>
                </Card>
              </Columns.Column>
            </Columns>
          </Content>
        </MainContentContainer>
      </FullWidthContainer>
    </Fragment>
  )
};
