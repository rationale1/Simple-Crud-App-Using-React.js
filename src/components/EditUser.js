import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { editUser } from "../Redux/actions/crudActions";

const EditUser = props => {
  const [editName, setEditName] = useState(""),
    { users } = useSelector(state => state.crud),
    history = useHistory(),
    dispatch = useDispatch(),
    currentId = Number(props.match.params.id);

  useEffect(() => {
    const seletedUser = users.find(user => user.id === currentId);

    setEditName(seletedUser.name);
  }, [currentId, users]);

  const onChange = e => {
    setEditName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const updateUser = {
      id: currentId,
      name: editName,
    };

    dispatch(editUser(updateUser));

    history.push("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter Name"
        value={editName}
        onChange={onChange}
      />

      <button type="submit" className="btn">
        Edit Name
      </button>

      <Link to="/" className="btn danger">
        Cancel
      </Link>
    </form>
  );
};

export default EditUser;
