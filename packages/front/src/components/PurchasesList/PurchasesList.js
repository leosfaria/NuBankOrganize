import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Columns } from 'react-bulma-components';
import { colors, money } from '../../helpers';

import moneyFly from '../../assets/img/icons/money-fly.png';

const PurchasesListWrapper = styled.ul`
  margin-left: 0px !important;
`;

const PurchasesListItem = styled.li`
  padding: 20px 0;
  list-style: none;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.gray};
  }

  & h3 {
    margin-bottom: 5px;
    font-size: 21px;
  }

  & p {
    margin-bottom: 5px !important;
    font-size: 18px;
    color: ${colors.primary};

    &:last-child {
      font-size: 14px;
      font-style: italic;
      font-weight: normal;
      color: #ccc;
    }
  }
`;

export const PurchasesList = props => {
  const { purchases } = props;

  return (
    <PurchasesListWrapper>
      {(purchases && purchases.length > 0) &&
        purchases.map((purchase, i) => (
          <PurchasesListItem key={i}>
            <Columns>
              <Columns.Column size={2} style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <img src={moneyFly} width="64px" alt="Ícone dinheiro" />
              </Columns.Column>

              <Columns.Column size={10}>
                <h3>{purchase.title}</h3>
                <p>{money(purchase.value)}</p>
                <p>Realizada em {purchase.date}</p>
              </Columns.Column>
            </Columns>
          </PurchasesListItem>
        ))
      }
    </PurchasesListWrapper>
  );
}

PurchasesList.propTypes = {
  purchases: PropTypes.arrayOf(PropTypes.object).isRequired,
};
