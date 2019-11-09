import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import SubmitLinkButton from 'components/SubmitLinkButton';
import Header from 'layouts/Header';

import themes from 'themes';
import List from "../../components/List";

class Home extends Component {
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
            <ContentWrapper>
              <Content>
                <SubmitLinkButton />
                <List/>
              </Content>
            </ContentWrapper>
          </Wrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Home;

const Container = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  background-color: ${props => props.theme.background};
  transition: background-color 0.5s ease;
`;

const Wrapper = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Content = styled.div`
  width: 500px;
`;
