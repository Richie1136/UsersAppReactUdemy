import './App.css';
import AddUser from './components/adduser/AddUser';
import UsersList from './components/userslist/UsersList';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
