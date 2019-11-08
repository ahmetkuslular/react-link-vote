import React from 'react';

import styled, { keyframes } from 'styled-components';

const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
};
function MoonButton({ theme = 'light', onClick }) {
  return (
    <Container onClick={onClick}>
      {theme === 'light' ? (
        <span role="img" aria-label={theme}>
          🌒
        </span>
      ) : (
        <span role="img" aria-label={theme}>
          🌔
        </span>
      )}
    </Container>
  );
}

export default MoonButton;

const Container = styled.button`
  background-color: transparent;
  text-transform: capitalize;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
`;

