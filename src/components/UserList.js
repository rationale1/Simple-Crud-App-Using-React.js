import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../Redux/actions/crudActions";

const UserList = () => {
  const { users } = useSelector(state => state.crud);

  const dispatch = useDispatch();

  return (
    <ul className="list">
      {users.map(user => (
        <li key={user.id}>
          <span>
            <strong>{user.name}</strong>
          </span>

          <div>
            <Link to={`/edit/${user.id}`} className="btn gold">
              Edit
            </Link>

            <button
              className="btn danger"
              onClick={() => dispatch(removeUser(user.id))}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
