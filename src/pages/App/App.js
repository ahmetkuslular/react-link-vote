import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from 'layouts/Header';

import themes from 'themes';
import Box from 'components/Box';
import SubmitLinkButton from 'components/SubmitLinkButton';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <Container>
        <Wrapper>
          <Header />
          <Content>
            <SubmitLinkButton />
          </Content>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  background-color: ${props => props.theme.background};
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  margin-top: 20px;
`;
