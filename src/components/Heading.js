import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <nav>
      <h3>My Team</h3>

      <Link to="/add" className="btn primary">
        Add User
      </Link>
    </nav>
  );
};

export default Heading;
