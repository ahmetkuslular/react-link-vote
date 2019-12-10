import React from 'react';
import styled, { withTheme } from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

import Box from 'components/Box';
import { UpIcon, DownIcon, DeleteIcon } from 'components/Icons';

function ListItem({ item, voteLink, deleteItem, theme }) {
  const date = formatDistanceToNow(item.id);
  return (
    <Container>
      <DeleteButton onClick={() => deleteItem(item)}>
        <DeleteIcon width={25} height={25} color={theme.deleteIcon} />
      </DeleteButton>
      <Box label="POINTS" value={item.points} />
      <Content>
        <Info>
          <LabelWrapper>
            <Name>{item.name}</Name>
            <Date>{date}</Date>
          </LabelWrapper>

          <Url>({item.url})</Url>
        </Info>
        <ActionButtons>
          <Vote type="up" onClick={() => voteLink(item, 'up')}>
            <UpIcon /> Up Vote
          </Vote>
          <Vote type="down" onClick={() => voteLink(item, 'down')} disabled={item.points < 1}>
            <DownIcon /> Down Vote
          </Vote>
        </ActionButtons>
      </Content>
    </Container>
  );
}

export default withTheme(ListItem);

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  position: relative;

  &:hover {
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    background: ${props => props.theme.boxHoverColor};
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.label};
`;

const Url = styled.a`
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 100;
  color: ${props => props.theme.url};
`;

const Info = styled.div`
  flex: 1;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Vote = styled.span`
  flex: 1;
  font-size: 15px;
  cursor: pointer;
  color: ${props => props.theme.voteColor};
  &:hover {
    color: ${props => props.theme[`${props.type}Vote`]};
  }
  ${props =>
    props.disabled &&
    `
    cursor: not-allowed;
    color: #aaa;
    pointer-events: none;
    
  `}
`;

const DeleteButton = styled.div`
  position: absolute;
  top: -10px;
  right: -5px;
  opacity: 0;
  cursor: pointer;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: ${props => props.theme.url};
`;
