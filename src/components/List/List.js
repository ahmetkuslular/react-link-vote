import React from 'react';
import styled from 'styled-components';

import ListItem from '../ListItem';

function List({ data, ...rest }) {
  return (
    <Container>
      {data.map((item, index) => (
        <ListItem key={index} item={item} {...rest} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
`;

export default List;
