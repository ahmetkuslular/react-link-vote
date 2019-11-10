import React, { Component } from 'react';
import { connect } from 'react-redux';

import SubmitLinkButton from 'components/SubmitLinkButton';
import List from 'components/List';

import { voteLink, deleteLink } from 'store/links/actions';

class LinkList extends Component {
  upVote = link => {
    this.props.voteLink({
      link,
      voteType: 'up',
    });
  };

  downVote = link => {
    this.props.voteLink({
      link,
      voteType: 'down',
    });
  };

  deleteItem = item => {
    this.props.deleteLink(item);
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
  { voteLink, deleteLink },
)(LinkList);
