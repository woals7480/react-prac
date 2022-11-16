import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Counter from "./pages/counter";
import Input from "./pages/input";
import Input2 from "./pages/input2";
import UserList from "./pages/list";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/input">Input</Link>
        <br />
        <Link to="/input2">Input2</Link>
        <br />
        <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/list" element={<UserList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
