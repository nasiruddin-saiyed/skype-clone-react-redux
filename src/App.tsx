import React from "react";
import "./App.css";
import Sidebar from "./app/components/Sidebar/Sidebar";
import Main from "./app/components/Main/Main";
import store from "./app/services/store";

function App() {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={contacts} />
      <Main />
    </div>
  );
}

export default App;
