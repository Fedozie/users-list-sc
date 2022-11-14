import React from 'react';
import styled from 'styled-components';
import Label from './label';
import Wrapper from '../helpers/wrapper';

const InputField = styled.input`
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 1rem;

    &:focus{
        outline: none;
        border-color: ${({theme}) => theme.colors.mainPurple};
    }
`

const Input = ({type, id, value, changeHandler, label}) => {
  return (
    <Wrapper>
        <Label 
          children={label}
          htmlFor = {id}
        />
        <InputField
          type = {type}
          id = {id}
          value = {value}
          onChange = {changeHandler}
        />
    </Wrapper>
  )
}

export default Input;