import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SubmitLinkButton from 'components/SubmitLinkButton';
import List from 'components/List';
import DeleteModal from 'components/DeleteModal';

import { voteLink, deleteLink } from 'store/links/actions';
import Select from 'components/Select';

const filterOptions = [
  { value: 'lastAdded', label: 'Last Added' },
  { value: 'mostVoted', label: 'Most Voted' },
  { value: 'lessVoted', label: 'Less Voted' },
];

class LinkList extends Component {
  state = {
    showModal: false,
    link: null,
    orderBy: 'lastAdded',
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

  handleSelectOrder = event => {
    const orderBy = event.target.value;
    this.setState({
      orderBy,
    });
  };

  render() {
    const {
      links: { data },
    } = this.props;
    const { showModal, link, orderBy } = this.state;

    return (
      <div>
        <SubmitLinkButton />
        <Divider />
        <FilterArea>
          <Select options={filterOptions} value={orderBy} onChange={this.handleSelectOrder} />
        </FilterArea>
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

const FilterArea = styled.div`
  margin: 10px;
`;

const Divider = styled.hr`
  background-color: ${props => props.theme.borderColor};
  height: 4px;
  border-color: transparent;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
