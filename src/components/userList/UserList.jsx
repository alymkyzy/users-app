import UserItem from "../userItem/UserItem";
import classes from "./UserList.module.css";

const UserList = ({ users }) => {

  const sorted = (u) => {
    return [...u].sort((a, b) => b.age - a.age)
  }

  return (
    <div className={classes.users}>
      {sorted(users).map((user) => (
        <UserItem user={user}/>
      ))}
    </div>
  );
};

export default UserList;
