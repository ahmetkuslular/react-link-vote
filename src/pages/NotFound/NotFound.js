import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Routes } from '../../Constants';
import { RightIcon } from '../../components/Icons';

function NotFound() {
  return (
    <Container>
      <Label>Aradığınız Sayfayı Bulamadık😔</Label>
      <SubContent>Denemek istersen elimde bunlar var;</SubContent>
      <LinksWrapper>
        <StyledLink to={Routes.LINK_LIST}>
          <RightIcon />
          Ana Sayfa
        </StyledLink>
        <StyledLink to={Routes.ADD_NEW_LINK}>
          <RightIcon />
          Yeni Link Ekle
        </StyledLink>
      </LinksWrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  align-items: center;
`;

const Label = styled.label`
  font-size: 30px;
  font-weight: 800;
  color: ${props => props.theme.label};
`;

const SubContent = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 15px;
  color: ${props => props.theme.label};
  opac
`;

const LinksWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.label};
  margin-bottom: 20px;
  &:hover {
    color:  ${props => props.theme.hepsiburada};
  }
`;

export default NotFound;
