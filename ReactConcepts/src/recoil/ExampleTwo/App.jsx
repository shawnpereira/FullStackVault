import { RecoilRoot } from "recoil";
import Header from "../src/Header";

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <Header />
      </div>
    </RecoilRoot>
  );
};

export default App;
