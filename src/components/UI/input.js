import React from 'react';
import styled from 'styled-components';
import Label from './label';

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
    <div>
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
    </div>
  )
}

export default Input;