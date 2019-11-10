import React from 'react';
import styled from 'styled-components';
import Box from '../Box';
import { Link } from 'react-router-dom';

function SubmitLinkButton({ history }) {
  return (
    <Wrapper to="/addLink">
      <Box value="+" />
      <Label>SUBMIT A LINK</Label>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 5px;
  background: ${props => props.theme.buttonColor};
  padding: 10px;
  color: ${props => props.theme.label};
  text-decoration: none;
`;

const Label = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
  color: ${props => props.theme.label};
`;

export default SubmitLinkButton;
