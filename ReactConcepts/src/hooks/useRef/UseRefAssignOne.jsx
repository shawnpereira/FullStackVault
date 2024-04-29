import React, { useState, useRef } from "react";

const UseRefAssignOne = () => {
  const [render, setRender] = useState(0);

  const renderThis = useRef(0);

  const handleReRender = () => {
    renderThis.current = renderThis.current + 1;
    setRender(render + 1);
  };

  return (
    <div>
      <p>This component has rendered {renderThis.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
};

export default UseRefAssignOne;
