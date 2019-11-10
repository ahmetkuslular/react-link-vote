import React, { Component } from 'react';
import { connect } from 'react-redux';

import SubmitLinkButton from 'components/SubmitLinkButton';
import List from 'components/List';

import { fetchLinks } from 'store/links/actions';


class LinkList extends Component {
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
      <div>
        <SubmitLinkButton />
        <List
          data={data}
          upVote={this.upVote}
          downVote={this.downVote}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ links }) => ({
  links,
});

export default connect(
  mapStateToProps,
  { fetchLinks },
)(LinkList);

