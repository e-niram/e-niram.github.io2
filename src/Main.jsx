import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './App';
import { Signup } from './Signup';

const Main = () => {
  return (
    <Routes>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/signup" component={Signup}></Route>
    </Routes>
  );
};

export default Main;
