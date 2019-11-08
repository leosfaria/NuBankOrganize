import styled from 'styled-components';
import { colors } from '../../helpers';

export const Card = styled.div`
  width: 100%;
  min-height: 150px;
  position: relative;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 20px rgba(80, 80, 80, 0.15);

  h2 {
    margin-bottom: 10px;
  }

  p {
    font-size: 32px;
    font-weight: bold;
    color: ${colors.primary}
  }
`;
