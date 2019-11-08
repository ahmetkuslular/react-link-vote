import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import SubmitLinkButton from 'components/SubmitLinkButton';
import Header from 'layouts/Header';

import themes from 'themes';

class App extends Component {
  state = {
    theme: 'light',
  };

  changeTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={themes[theme]}>
        <Container>
          <Wrapper>
            <Header changeTheme={this.changeTheme} theme={theme} />
            <Content>
              <SubmitLinkButton />
            </Content>
          </Wrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;

const Container = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  background-color: ${props => props.theme.background};
  transition: background-color .5s ease;
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
