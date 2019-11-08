import React from 'react';
import styled from 'styled-components';

function Box({ label, value }) {
  return (
    <Wrapper>
      {value && <Value>{value}</Value>}
      {label && <Label>{label}</Label>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.boxColor};
  border: 1px solid rgb(151, 151, 151);
  border-radius: 5px;
`;

const Value = styled.div`
  font-weight: bold;
  font-size: 40px;
  left: 0;
`;

const Label = styled.div`
  font-weight: 100;
  font-size: 15px;
  text-transform: uppercase;
`;

export default Box;
