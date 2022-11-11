import React from 'react';
import styled from "styled-components";

const StyledCard = styled.div`
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`

const Card = ({children, className}) => {
  return (
    <StyledCard
        className={className}
    >
        {children}
    </StyledCard>
  )
}

export default Card;