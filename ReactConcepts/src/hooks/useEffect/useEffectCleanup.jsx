// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   useEffect(() => {
// Perform setup or data fetching here

//     return () => {
// Cleanup code (similar to componentWillUnmount)
//     };
//   }, []);

//   // Render UI
// }
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender((r) => !r);
    }, 5000);
  }, []);

  return <>{render ? <MyComponent /> : <div></div>}</>; // iF render is true then display the div or else dont. SO the render becomes true after 5sec
}

function MyComponent() {
  useEffect(() => {
    console.error("component mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);

  return <div>From inside my component</div>;
}

export default App;
