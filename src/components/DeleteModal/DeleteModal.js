import React from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';
import Button from '../Button';

function DeleteModal({ linkName, open, onClose, onOk }) {
  return (
    <Modal little open={open} styles={{ modal: { minWidth: 500 } }} onClose={onClose}>
      <Header>Remove Link</Header>

      <Content>
        <Label>Do you want to remove:</Label>
        <LinkName>{linkName}</LinkName>
        <ActionButtons>
          <StyledButton type="ok" onClick={onOk}>OK</StyledButton>
          <StyledButton type="cancel" onClick={onClose}> CANCEL</StyledButton>
        </ActionButtons>
      </Content>
    </Modal>
  );
}

const Header = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.label};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Label = styled.label`
  font-size: 20px;
`;

const LinkName = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
  &:hover {
    color: ${props => props.theme[props.type]};
  }
`;

export default DeleteModal;
