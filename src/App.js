import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import useEffectSkipInitialRender from "./useEffectSkipInitialRender";
import ProfilePage from "./ProfilePage";

import UserTable from "./UserTable";

function App() {
  return (
    <div className="main-page">
      <Routes>
        {/* <Router> */}
        <Route path="/" element={<UserTable />} />
        <Route path="/" element={<ProfilePage />} />
        {/* </Router> */}
      </Routes>
    </div>
  );
}

export default App;
