import React from 'react';
import styled from 'styled-components';

import './select.css';

function Select({ options, value, onChange }) {
  return (
    <Container className="select">
      <StyledSelect onChange={onChange} value={value}>
        <option defaultValue disabled>
          Choose an option
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 15em;
  height: 2.5em;
  line-height: 2.4;
  overflow: hidden;
  border-radius: 0.25em;
  &:after {
    content: '\\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: ${props => props.theme.background};
    color: ${props => props.theme.label};
    cursor: pointer;
    pointer-events: none;
    border: solid 1px ${props => props.theme.label};
  }
`;

const StyledSelect = styled.select`
  flex: 1;
  padding: 0 0.5em;
  color: ${props => props.theme.label};
  cursor: pointer;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: solid 1px ${props => props.theme.label};
  background: ${props => props.theme.background};
  font-size: 15px;
`;

export default Select;
