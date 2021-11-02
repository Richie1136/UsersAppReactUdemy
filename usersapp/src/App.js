import './App.css';
import AddUser from './components/adduser/AddUser';
import UsersList from './components/userslist/UsersList';
import { useState } from 'react'

function App() {
  const [userslist, setUserList] = useState([])

  const onAddUser = (name, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name, age, id: Math.random().toString() }]
    })
  }
  return (
    <div className="App">
      <AddUser onadduser={onAddUser} />
      <UsersList users={userslist} />
    </div>
  );
}

export default App;
