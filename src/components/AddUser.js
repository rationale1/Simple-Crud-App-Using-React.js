import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addUser } from "../Redux/actions/crudActions";

const AddUser = () => {
  const [name, setName] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      id: Math.random(),
      name,
    };

    dispatch(addUser(newUser));

    history.push("/");

    setName("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button type="submit" className="btn">
        Submit
      </button>

      <Link to="/" className="btn danger">
        Cancel
      </Link>
    </form>
  );
};

export default AddUser;
