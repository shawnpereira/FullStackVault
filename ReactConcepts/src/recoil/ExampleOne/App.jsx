import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./recoil/store/atoms/count";

///We convert the useContext hook Example to Recoil below.
//
// Recoil explanation:
//we have to create a atom file, recoil could be understood as a useState hook
// eg: const [count, setCount] = useState("0")
// So from above if we just need the value we do count in useState, in recoil we do
// const count = useRecoilValue(countAtom);
// for setCount, in recoil we use......  const setCount = useSetRecoilState(countAtom);
// and for entire thing we do const [count, setCount] = useRecoilState(countAtom);
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////////////////
function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
//////////////////////////////////////////////////////////////////////
function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
    </div>
  );
}
/////////////////////////////////////////////////////////////////////
function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
