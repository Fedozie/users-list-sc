import React, {useState} from 'react';
import AddUser from '../../components/Users/AddUser/addUser';
import UserList from '../../components/Users/UserList/userList';

const UserPage = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users = {usersList}/>
    </div>
  )
}

export default UserPage;