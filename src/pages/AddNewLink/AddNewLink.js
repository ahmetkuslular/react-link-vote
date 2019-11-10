import React, { Component } from 'react';
import styled from 'styled-components';

import BackLink from 'components/BackLink';
import Input from 'components/Input';
import Button from '../../components/Button';

class AddNewLink extends Component {
  state = {
    name: '',
    url: '',
  };

  handleOnChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log({ value, name });
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Sumbit');
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
          <Button>ADD</Button>
        </form>
      </Container>
    );
  }
}

export default AddNewLink;

const Container = styled.div`
  flex: 1;
`;
const PageName = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${props => props.theme.label};
  margin-bottom: 50px;
`;

