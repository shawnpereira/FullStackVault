import { Fragment, useState, memo } from "react";

const App = () => {
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
});

export default App;
