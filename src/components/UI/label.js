import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Label = ({children, htmlFor}) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
        {children}
    </StyledLabel>
  )
}

export default Label;