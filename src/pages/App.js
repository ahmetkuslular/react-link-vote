import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import LinkList from 'pages/LinkList';
import AddLink from 'pages/AddNewLink';

import themes from 'themes';
import Header from 'layouts/Header';
import { Routes, Themes as ThemeList } from 'Constants';

class App extends Component {
  state = {
    theme: ThemeList.LIGHT,
  };

  changeTheme = () => {
    this.setState(state => ({
      theme: state.theme === ThemeList.LIGHT ? ThemeList.DARK : ThemeList.LIGHT,
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
                <Router>
                  <Switch>
                    <Route exact path={Routes.LINK_LIST} component={LinkList} />
                    <Route path={Routes.ADD_NEW_LINK} component={AddLink} />
                  </Switch>
                </Router>
              </Content>
            </ContentWrapper>
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
