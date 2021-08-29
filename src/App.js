import React, { useState } from 'react'
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    //prevUserList 기존의 유저리스트
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
