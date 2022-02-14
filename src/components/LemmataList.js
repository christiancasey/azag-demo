import React from "react";

function LemmataList(props) {
  const [lemmata, setLemmata] = React.useState(getLemmata());
  
  function getLemmata() {
    const savedLemmata = JSON.parse(localStorage.getItem('lemmata'));
    return savedLemmata || [];
  }
  
  return (
    <>
      {JSON.stringify(lemmata)}
    </>
  )
}

export default LemmataList;