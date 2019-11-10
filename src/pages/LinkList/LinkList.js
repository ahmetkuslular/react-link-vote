import React, { Component } from 'react';
import { connect } from 'react-redux';

import SubmitLinkButton from 'components/SubmitLinkButton';
import List from 'components/List';
import DeleteModal from 'components/DeleteModal';

import { voteLink, deleteLink } from 'store/links/actions';
import { message } from 'utils';

class LinkList extends Component {
  state = {
    showModal: false,
    link: null,
  };

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

  deleteItem = () => {
    const { link } = this.state;
    this.props.deleteLink(link);
    this.onCloseModal();
  };

  onShowModal = link => {
    this.setState({ showModal: true, link });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      links: { data },
    } = this.props;
    const { showModal, link } = this.state;
    return (
      <div>
        <SubmitLinkButton />
        <List
          data={data}
          upVote={this.upVote}
          downVote={this.downVote}
          deleteItem={this.onShowModal}
        />
        <DeleteModal
          open={showModal}
          onOk={this.deleteItem}
          onClose={this.onCloseModal}
          linkName={link && link.name}
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
