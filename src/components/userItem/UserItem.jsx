import "./UserItem.css";

const UserItem = ({ user }) => {
  return (
    <div className="user">
      <div>
        <p>{user.name} ({user.age} years old)</p>
      </div>
    </div>
  );
};

export default UserItem;
