import { Fragment, useState, memo } from "react";

//useMemo can be used to not re render the expensive process if it is dependent on some state/input
//however when it has a function, callback hook needs to be used

const UseMemo = () => {
  const [name, setName] = useState("shawn");
  function Change() {
    setName(Math.random().toString());
  }
  return (
    <Fragment>
      <button onClick={Change}>click</button>
      <Render title={name} />
      <Render title="Shawnsrf" />
      <Render title="Shawnsrf" />
      <Render title="Shawnsrf" />
      <Render title="Shawnsrf" />
      <Render title="Shawnsrf" />
    </Fragment>
  );
};

const Render = memo(function Render({ title }) {
  return <div>{title}</div>;
}); // can add parameter in [] for memo so on changing that, it will render

export default UseMemo;
