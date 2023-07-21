import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./Components/Posts";
import HomePage from "./Components/HomePage";

import NavBar from "./Components/NavBar";
import ErrorPage from "./Components/ErrorPage";

function App() {
  console.log("hello");
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/Posts" Component={Posts}></Route>
        <Route path="*" Component={ErrorPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
