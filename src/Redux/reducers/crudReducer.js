const initState = {
  users: [
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" },
    { id: 3, name: "User Three" },
  ],
};

const crudReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== payload.id),
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, payload],
      };

    case "EDIT_USER":
      const updateUsers = state.users.map(user =>
        user.id === payload.id ? payload : user,
      );

      return {
        ...state,
        users: updateUsers,
      };

    default:
      return state;
  }
};

export default crudReducer;
