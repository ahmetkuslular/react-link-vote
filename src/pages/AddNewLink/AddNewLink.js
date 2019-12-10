import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import BackLink from 'components/BackLink';
import Input from 'components/Input';
import Button from 'components/Button';

import { addNewLink } from 'store/links/actions';
import { message } from 'utils';

class AddNewLink extends Component {
  state = {
    name: '',
    url: '',
  };

  handleOnChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.validateForm()) {
      this.props.addNewLink({
        ...this.state,
        id: new Date().getTime(),
        points: 0,
      });
    } else {
      return false;
    }
  };

  validateForm = () => {
    let valid = true;
    const errors = this.formValidation();

    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    Object.keys(errors).map(key => message(errors[key], 'error'));

    return valid;
  };

  formValidation = () => {
    const { name, url } = this.state;
    let errors = {};

    if (name === '') errors.name = '<b>Name</b> alanı boş bırakılamaz!';
    if (url === '') errors.url = '<b>Url</b> alanı boş bırakılamaz!';

    if(!(/^(ftp|http|https):\/\/[^ "]+$/.test(url))){
      errors.url = '<b>Url</b> alanı yanlış formatta!';
    }

    return errors;
  };

  render() {
    const { name, url } = this.state;
    return (
      <Container>
        <BackLink />
        <PageName>Add New Link</PageName>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            label="Link Name:"
            placeholder="e.g. Alphabet"
            value={name}
            onChange={this.handleOnChange}
          />
          <Input
            name="url"
            label="Link URL:"
            placeholder="e.g. http://abc.xyz"
            value={url}
            onChange={this.handleOnChange}
          />
          <AddButton type="submit">ADD</AddButton>
        </form>
      </Container>
    );
  }
}

export default connect(null, { addNewLink })(AddNewLink);

const Container = styled.div`
  flex: 1;
`;
const PageName = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${props => props.theme.label};
  margin-bottom: 50px;
`;

const AddButton = styled(Button)`
  &:hover {
    color: ${props => props.theme.ok};
  }
`;
