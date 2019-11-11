import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import BackLink from 'components/BackLink';
import Input from 'components/Input';
import Button from 'components/Button';

import { addNewLink } from 'store/links/actions';

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

    this.props.addNewLink({
      ...this.state,
      id: new Date().getTime(),
      points: 0,
    });
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
          <Button type="submit">ADD</Button>
        </form>
      </Container>
    );
  }
}

export default connect(
  null,
  { addNewLink },
)(AddNewLink);

const Container = styled.div`
  flex: 1;
`;
const PageName = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${props => props.theme.label};
  margin-bottom: 50px;
`;
