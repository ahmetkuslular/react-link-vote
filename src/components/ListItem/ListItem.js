import React from 'react';
import styled from 'styled-components';
import Box from '../Box';
import { UpIcon, DownIcon } from '../Icons';

function ListItem({ item }) {
  return (
    <Container>
      <Box label="POINTS" value="6" />
      <Content>
        <Info>
          <Name>{item.name}</Name>
          <Url>({item.url})</Url>
        </Info>
        <ActionButtons>
          <Vote>
            <UpIcon /> Up Vote
          </Vote>
          <Vote>
            <DownIcon /> Down Vote
          </Vote>
        </ActionButtons>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
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
  color: ${props => props.theme.voteColor};
`;
export default ListItem;
