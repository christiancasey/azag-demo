import React from "react";

import SetInitialLemmata from './components/SetInitialLemmata';
import LemmataList from './components/LemmataList';

import DATA from './data/sample-data.json';

function App() {
  return (
    <>
      <SetInitialLemmata />
      <LemmataList />
    </>
  );
}

export default App;
