import React, {useState} from 'react';
import AddUser from '../../components/Users/AddUser/addUser';
import UserList from '../../components/Users/UserList/userList';

const UserPage = () => {
  const [usersList, setUsersList] = useState([]);

  return (
    <div>
    
      <AddUser />
      <UserList users = {usersList}/>
    </div>
  )
}

export default UserPage;