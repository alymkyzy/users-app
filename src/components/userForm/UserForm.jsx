import { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import classes from "./UserForm.module.css";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const newUserHandler = (event) => {
    event.preventDefault();
    const newUser = {
      name,
      age,
    };
    addUser(newUser);
    setName("");
    setAge("");
  };

  let disabled = name.trim().length > 0 && age.trim().length > 0 ? true : false;

  return (
    <form className={classes.form}>
      <Input
        onChange={nameChangeHandler}
        value={name}
        type="text"
        label="Username"
        placeholder="name..."
      />
      <Input
        onChange={ageChangeHandler}
        value={age}
        type="number"
        label="Age (Years)"
        placeholder="age..."
      />
      <Button disabled={!disabled} onClick={newUserHandler}>Add user</Button>
    </form>
  );
};

export default UserForm;
