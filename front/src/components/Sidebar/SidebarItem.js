import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors, icons } from '../../helpers';

const StyledSidebarItem = styled.li`
  width: 100%;
  height: 85px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 85px;
  text-decoration: none;
  font-size: 14px;
  color: ${colors.white};
  transition: all 300ms ease-in-out;

  &.active {
    background: linear-gradient(
      270deg,
      ${colors.sidebarGradient.from} 0%,
      ${colors.sidebarGradient.to} 100%
    );
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const SidebarItem = props => (
  <StyledSidebarItem>
    <StyledNavLink to={props.href} activeClassName="active">
      <img src={icons[props.icon]} alt="Sidebar icon" width="48px" />
      {props.title}
    </StyledNavLink>
  </StyledSidebarItem>
);
