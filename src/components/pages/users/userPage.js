import React from 'react';
import AddUser from '../../components/Users/AddUser/addUser';
import UserList from '../../components/Users/UserList/userList';

const UserPage = () => {
  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  )
}

export default UserPage;