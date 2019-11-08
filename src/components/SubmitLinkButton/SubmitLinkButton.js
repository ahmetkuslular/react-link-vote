import React from 'react';
import styled from 'styled-components';
import Box from '../Box';

function SubmitLinkButton() {
  return (
    <Wrapper>
      <Box value="+" />
      <Label>SUBMIT A LINK</Label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 5px;
  background: rgb(247, 247, 247);
  padding: 10px;
`;

const Label = styled.label`
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
`;

export default SubmitLinkButton;
