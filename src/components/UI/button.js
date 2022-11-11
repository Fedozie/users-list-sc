import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.mainPurple};
    font: inherit;
    padding: 0.25rem 1rem;
    cursor: pointer;
    border: 1px solid  ${({theme}) => theme.colors.mainPurple};

    &:hover, &:active{
        background: ${({theme}) => theme.colors.hoverPurple};
        border-color: ${({theme}) => theme.colors.hoverPurple};
    }

    &:focus{
        outline: none;
    }
`;

const Button = ({children, onClick, type}) => {
  return (
    <StyledButton
        type = {type || 'button'}
        onClick = {onClick}
    >
        {children}
    </StyledButton>
  )
}

export default Button;