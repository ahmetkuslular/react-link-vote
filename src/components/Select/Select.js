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
  background: #ececec;
  overflow: hidden;
  border-radius: 0.25em;
  &:after {
    content: '\\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #ececec;
    cursor: pointer;
    pointer-events: none;
    border: solid 1px #222831;
  }
`;

const StyledSelect = styled.select`
  flex: 1;
  padding: 0 0.5em;
  color: #222831;
  cursor: pointer;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: solid 1px #222831;
  background: #ececec;
  font-size: 15px;
`;

export default Select;
