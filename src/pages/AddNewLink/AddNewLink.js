import React from 'react';
import styled from "styled-components";

import BackLink from 'components/BackLink';

function AddNewLink() {
  return (
      <div>
          <BackLink/>
          <PageName>Add New Link</PageName>
      </div>


  );
}

const PageName = styled.div`
    font-size: 40px;
    font-weight: 800;
    color: ${props => props.theme.label}
`
export default AddNewLink;
