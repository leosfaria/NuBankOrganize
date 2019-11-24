import React from 'react';

import { Content } from 'react-bulma-components';

import {
  FullWidthContainer,
  MainContentContainer,
  Sidebar,
  SidebarItem,
  TriangleBackground,
} from '../../components';

export const Details = props => {
  return (
    <>
      <TriangleBackground />

      <FullWidthContainer>
        <Sidebar>
          <SidebarItem title="Resumo" icon="home" href="/" />
          <SidebarItem title="Detalhes" icon="details" href="/details" />
        </Sidebar>

        <MainContentContainer>
          <Content>
            <h1>Detalhes</h1>
            <p>¯\_(ツ)_/¯</p>
          </Content>
        </MainContentContainer>
      </FullWidthContainer>
    </>
  );
}
