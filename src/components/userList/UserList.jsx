import UserItem from "../userItem/UserItem";
import "./UserList.css";

const UserList = ({ users }) => {

  const sorted = (u) => {
    return [...u].sort((a, b) => b.age - a.age)
  }

  return (
    <div className="users">
      {sorted(users).map((user) => (
        <UserItem user={user}/>
      ))}
    </div>
  );
};

export default UserList;
