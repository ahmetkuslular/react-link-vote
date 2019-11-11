import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SubmitLinkButton from 'components/SubmitLinkButton';
import List from 'components/List';
import DeleteModal from 'components/DeleteModal';
import Select from 'components/Select';
import Pagination from 'components/Pagination';

import { voteLink, deleteLink, sortLinks, changePage, fetchLinks } from 'store/links/actions';

const filterOptions = [
  { value: 'lastAdded', label: 'Last Added' },
  { value: 'mostVoted', label: 'Most Voted' },
  { value: 'lessVoted', label: 'Less Voted' },
];

class LinkList extends Component {
  state = {
    showModal: false,
    link: null,
  };

  changePage = page => {
    this.props.changePage(page);
  };

  upVote = link => {
    this.props.voteLink({ link, voteType: 'up' });
  };

  downVote = link => {
    this.props.voteLink({ link, voteType: 'down' });
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
    this.props.sortLinks(orderBy);
  };

  render() {
    const {
      links: { data, orderBy, totalItems, currentPage, perPage },
    } = this.props;
    const { showModal, link } = this.state;

    const rowsPerPage = data.slice(currentPage - 1, perPage);

    return (
      <div>
        <SubmitLinkButton />
        <Divider />
        <FilterArea>
          <Select options={filterOptions} value={orderBy} onChange={this.handleSelectOrder} />
        </FilterArea>
        <List
          data={rowsPerPage}
          upVote={this.upVote}
          downVote={this.downVote}
          deleteItem={this.onShowModal}
        />
        <Pagination
          totalItems={totalItems}
          perPage={perPage}
          currentPage={currentPage}
          onChange={this.changePage}
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

export default connect(mapStateToProps, {
  voteLink,
  deleteLink,
  sortLinks,
  changePage,
  fetchLinks,
})(LinkList);

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
