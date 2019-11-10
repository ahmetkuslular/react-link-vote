import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import SubmitLinkButton from 'components/SubmitLinkButton';
import Header from 'layouts/Header';

import { fetchLinks } from 'store/links/actions';

import themes from 'themes';
import List from 'components/List';

class Home extends Component {
  componentDidMount() {
    this.props.fetchLinks();
  }

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
    const {
      links: { data },
    } = this.props;

    return (
      <Container>
        <SubmitLinkButton />
        <List
          data={data}
          upVote={this.upVote}
          downVote={this.downVote}
          deleteItem={this.deleteItem}
        />
      </Container>
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
  width: 500px;
`;
