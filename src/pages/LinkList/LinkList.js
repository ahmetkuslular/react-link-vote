import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SubmitLinkButton from 'components/SubmitLinkButton';
import List from 'components/List';
import DeleteModal from 'components/DeleteModal';
import Pagination from 'components/Pagination';
import FilterSection from './FilterSection';

import { voteLink, deleteLink, changePage, fetchLinks } from 'store/links/actions';

class LinkList extends Component {
  state = {
    showModal: false,
    link: null,
  };

  changePage = page => {
    this.props.changePage(page);
  };

  voteLink = (link, voteType) => {
    this.props.voteLink({ link, voteType });
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
      links: { data, totalItems, currentPage, perPage },
    } = this.props;
    const { showModal, link } = this.state;

    const index = (currentPage - 1) * perPage;
    const rowsPerPage = data.slice(index, index + perPage);

    return (
      <div>
        <SubmitLinkButton />
        <Divider />
        <FilterSection />
        <List data={rowsPerPage} voteLink={this.voteLink} deleteItem={this.onShowModal} />

        <PaginationWrapper>
          <Pagination
            totalItems={totalItems}
            perPage={perPage}
            currentPage={currentPage}
            onChange={this.changePage}
          />
        </PaginationWrapper>

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
  changePage,
  fetchLinks,
})(LinkList);

const Divider = styled.hr`
  background-color: ${props => props.theme.borderColor};
  height: 4px;
  border-color: transparent;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
