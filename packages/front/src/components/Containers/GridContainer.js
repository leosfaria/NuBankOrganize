import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  margin-top: 40px;
`;
