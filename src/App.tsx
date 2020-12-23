import React from "react";
import "./App.css";
import Sidebar from "./app/components/Sidebar/Sidebar";
import Main from "./app/components/Main/Main";
import store from "./app/services/store";
import  _ from 'lodash';

function App() {
  const { contacts = {} } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
