import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import SubmitLinkButton from 'components/SubmitLinkButton';
import Header from 'layouts/Header';

import { fetchLinks } from 'store/links/actions';

import themes from 'themes';
import List from 'components/List';

class Home extends Component {
  state = {
    theme: 'light',
  };

  componentDidMount() {
    this.props.fetchLinks();
  }

  changeTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  };

  upVote = item => {
    console.log('UP VOTE', item);
  };

  downVote = item => {
    console.log('DOWN VOTE', item);
  };

  deleteItem = item => {
    console.log('DELETE VOTE', item);
  };

  render() {
    const { theme } = this.state;
    const {
      links: { data },
    } = this.props;

    console.log('DATA', data);
    return (
      <ThemeProvider theme={themes[theme]}>
        <Container>
          <Wrapper>
            <Header changeTheme={this.changeTheme} theme={theme} />
            <ContentWrapper>
              <Content>
                <SubmitLinkButton />
                <List
                  data={data}
                  upVote={this.upVote}
                  downVote={this.downVote}
                  deleteItem={this.deleteItem}
                />
              </Content>
            </ContentWrapper>
          </Wrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({ links }) => ({
  links,
});

export default connect(
  mapStateToProps,
  { fetchLinks },
)(Home);

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
