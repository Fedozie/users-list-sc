import React, {useState} from 'react';
import AddUser from '../../components/Users/AddUser/addUser';
import UserList from '../../components/Users/UserList/userList';
import Wrapper from '../../components/helpers/wrapper';

const UserPage = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UserList users = {userList}/>
    </Wrapper>
  )
}

export default UserPage;