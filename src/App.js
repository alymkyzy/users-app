import { useState } from "react";
import "./App.css";
import UserForm from "./components/userForm/UserForm";
import UserList from "./components/userList/UserList";


function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  return (
    <div className="app">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
