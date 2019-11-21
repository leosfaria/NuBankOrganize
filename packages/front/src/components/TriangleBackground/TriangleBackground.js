import styled from 'styled-components';

const windowWidth = window.innerWidth;

export const TriangleBackground = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 550px ${windowWidth}px 0 0;
  border-color: #fafafa transparent transparent transparent;
`;
