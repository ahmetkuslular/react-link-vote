import React from 'react';
import styled, { css } from 'styled-components';

import { LeftIcon, RightIcon } from 'components/Icons';

function renderPageNumbers(pageCount, perPage, currentPage, onChange) {
  let paginationItems = [];

  for (let i = 1; i <= pageCount; i++) {
    paginationItems.push(
      <Link href="#" key={`page_${i}`} active={currentPage === i} onClick={() => onChange(i)}>
        {i}
      </Link>,
    );
  }
  return paginationItems;
}

function Pagination({ totalItems, perPage, currentPage, onChange }) {
  const pageCount = Math.ceil(totalItems / perPage);
  return (
    <Container>
      <Link
        href="#"
        className="link"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <LeftIcon />
      </Link>

      {renderPageNumbers(pageCount, perPage, currentPage, onChange)}

      <Link
        className="link"
        href="#"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        <RightIcon />
      </Link>
    </Container>
  );
}

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const Link = styled.li`
  float: left;
  display: block;
  text-decoration: none;
  padding: 5px 12px;
  line-height: 1.5;
  background: ${props => props.theme.background};
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.label};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.label};
  }

  ${props =>
    props.active &&
    css`
      border: solid 1px ${props.theme.label};
    `}

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      color: #ccc;
    `}
`;

export default Pagination;
