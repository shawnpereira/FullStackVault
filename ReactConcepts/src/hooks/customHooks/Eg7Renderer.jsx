import { useEffect } from "react";

const Eg7Renderer = () => {
  useEffect(() => {
    console.log("Component has mounted");
  }, []);
  //
  useEffect(() => {
    console.log("Component has re rendered");
  });
};

export default Eg7Renderer;
