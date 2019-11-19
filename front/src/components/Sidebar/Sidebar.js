import React from 'react';
import styled from 'styled-components';

import sidebarBg from '../../assets/img/sidebar-bg.png';

const StyledSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 100%;
  background: url(${sidebarBg}) no-repeat center center;

  ul {
    width: 100%;
    list-style: none;
  }
`;

export const Sidebar = props => (
  <StyledSidebar>
    <ul>
      {props.children}
    </ul>
  </StyledSidebar>
);
