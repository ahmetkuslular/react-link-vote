import React from 'react';
import styled from 'styled-components';

import logo from './hepsiburada-logo.png';

function Header() {

  return (
    <Container>
      <LogoWrapper>
        <Image src={logo} />
      </LogoWrapper>
      <AppName>
        <b>Link</b>Vote Challenge
      </AppName>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding:10px;
`;

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const Image = styled.img`
  height: 40px;
`;

const AppName = styled.label`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  font-weight: 300;
`;
