import React, { useState } from 'react';

function PlayButton({ index }) {

  const [active, setActive] = useState(null)
  
  return (
    <>
      <button color={active === index ? "pink" : "grey"}
        onMouseEnter={() => setActive(index)}
        onMouseLeave={() => setActive(null)}> PLAY </button>
    </>
);
}

export default PlayButton;