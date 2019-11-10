import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import Home from './Home/Home';
import AddLink from './AddLink';
import styled, { ThemeProvider } from 'styled-components';
import themes from '../themes';
import Header from '../layouts/Header';

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
            <ContentWrapper>
              <Content>
                <Router>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/addLink" component={AddLink} />
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
