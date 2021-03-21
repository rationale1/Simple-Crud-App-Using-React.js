import React from "react";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Index.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/add" component={AddUser} />

          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
