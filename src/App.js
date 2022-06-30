import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import useEffectSkipInitialRender from "./useEffectSkipInitialRender";
import ProfilePage from "./ProfilePage";

import UserTable from "./UserTable";

function App() {
  const [user, setUser] = useState();
  const showProfileOfSelectedUser = (_user) => {
    setUser(_user);
  };

  return (
    <div className="main-page">
      <UserTable setUser={setUser} />
      <ProfilePage user={user} />
    </div>
  );
}

export default App;
