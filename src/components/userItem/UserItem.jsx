import classes from "./UserItem.module.css";

const UserItem = ({ user }) => {
  return (
    <div className={classes.user}>
      <div>
        <p>{user.name} ({user.age} years old)</p>
      </div>
    </div>
  );
};

export default UserItem;
