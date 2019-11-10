import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BackIcon } from 'components/Icons';
import { Routes } from 'Constants';

function BackLink() {
  return (
    <Container>
      <Wrapper to={Routes.LINK_LIST}>
        <BackIcon /> Return To List
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  margin-bottom: 50px;
`;

const Wrapper = styled(Link)`
  font-size: 15;
  font-weight: 600;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.theme.label};

  &:hover {
    color: ${props => props.theme.linkHoverColor};
  }
`;

export default BackLink;
