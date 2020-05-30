import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="arrangement">
    <div className="side-menu">
      <Footer />
    </div>
    <div className="main-menu">
      <AddTodo />
      <VisibleTodoList />
    </div>
  </div>
);

export default App;
