import React from "react";

import DATA from '../data/sample-data.json';

function SetInitialLemmata() {
  // const [lemmata, setLemmata] = React.useState(getLemmata());
  // 
  // function getLemmata() {
  //   const savedLemmata = JSON.parse(localStorage.getItem('lemmata'));
  //   return savedLemmata || [];
  // }
  // 
  // React.useEffect(() => {
  //   localStorage.setItem("lemmata", JSON.stringify(lemmata));
  // }, [lemmata]);
  // 
  // function setInitialLemmata() {
  //   localStorage.setItem("lemmata", JSON.stringify(DATA.lemmata));
  //   console.log(DATA.lemmata);
  // }
  
  let lemmata = null;//JSON.parse(localStorage.getItem('lemmata'));
  if (!lemmata) {
    localStorage.setItem("lemmata", JSON.stringify(DATA.lemmata));
    lemmata = DATA.lemmata;
  }
  console.log(lemmata);
    
  
  return (
    <>{lemmata ? 'Saved lemmata loaded.' : 'No lemmata loaded.'}</>
  );
}

export default SetInitialLemmata;