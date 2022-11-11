import React from 'react';
import styled from "styled-components";

import Card from '../../UI/card';

const StyledList = styled(Card)`
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;

    & ul{
        list-style-type: none;
        padding: 1rem;
    }

    & li{
        border: 1px solid #ccc;
        margin: 0.5rem 0;
        padding: 0.5rem;
    }
`;


const UserList = ({users}) => {
    

    return (
        <StyledList>
            <ul>
                {users.map((user) => (
                    <li key = {user.id}>
                        {user.user} is {user.age} years old.
                    </li>
                ))}
            </ul>
        </StyledList>
    )
}

export default UserList;