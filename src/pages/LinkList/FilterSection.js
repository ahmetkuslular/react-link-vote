import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Select from 'components/Select';

import { changePerPage, sortLinks } from 'store/links/actions';

const filterOptions = [
  { value: 'lastAdded', label: 'Last Added' },
  { value: 'mostVoted', label: 'Most Voted' },
  { value: 'lessVoted', label: 'Less Voted' },
];

const perPageOptions = [
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '20', label: '20' },
];

class FilterSection extends Component {
  handleSelectOrder = event => {
    const orderBy = event.target.value;
    this.props.sortLinks(orderBy);
  };

  handleSelectPerPage = event => {
    const perPage = event.target.value;
    this.props.changePerPage(perPage);
  };
  render() {
    const {
      links: { orderBy, perPage },
    } = this.props;
    return (
      <FilterArea>
        <Select options={filterOptions} value={orderBy} onChange={this.handleSelectOrder} />
        <Select options={perPageOptions} value={perPage} onChange={this.handleSelectPerPage} />
      </FilterArea>
    );
  }
}

const mapStateToProps = ({ links }) => ({
  links,
});

export default connect(mapStateToProps, {
  sortLinks,
  changePerPage,
})(FilterSection);

const FilterArea = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
`;
