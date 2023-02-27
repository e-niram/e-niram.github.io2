import * as React from 'react';
import './style.css';

import Header from './Header';
import HomeText from './HomeText';
import Main from './Main';

export default function App() {
  return (
    <div>
      <Main />
      <Header />
      <HomeText />
    </div>
  );
}