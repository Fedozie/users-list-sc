import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/button';
import AddUser from '../../components/Users/AddUser/addUser';
import UserList from '../../components/Users/UserList/userList';
import Wrapper from '../../components/helpers/wrapper';

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <AddUser />
      <UserList/>
      <Button onClick = {() => navigate("/trial")}>Go to Trial Page</Button>
    </Wrapper>
  )
}

export default UserPage;