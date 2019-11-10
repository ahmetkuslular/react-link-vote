import React from 'react';
import styled from 'styled-components';

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  font-size: 30px;
  padding: 5px;
  font-weight: bold;
  border-radius: 50px;
  width: 140px;
  float: right;
  background: ${props => props.theme.label};
  color: ${props => props.theme.background};
  outline: none;
`;
export default Button;
