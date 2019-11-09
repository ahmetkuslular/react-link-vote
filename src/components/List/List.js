import React from 'react';
import styled from 'styled-components';

import data from './data';
import ListItem from '../ListItem';

function List() {
  return (
    <Container>
      {data.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
`;

export default List;
