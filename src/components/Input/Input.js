import React from 'react';
import styled from 'styled-components';

function Input({ label, ...props }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 0.5em;
  padding: 0 0.71em;
  border: solid 1px ${props => props.theme.inputBorderColor};
  outline: none;
  background-color: transparent;
  font-size: 15px;
  color: ${props => props.theme.label};

  ::placeholder {
    color: ${props => props.theme.placeholderColor};
    opacity: 1;
  }

  &:focus {
    border-width: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    color: #aaa;
  }
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 200;
  color: ${props => props.theme.label};
  margin-bottom: 5px;
  padding: 0 0.71em;

  ${StyledInput}:focus & {
    color: red;
  }
`;

export default Input;
