import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { Dashboard } from "./Dashboard";
import { Landing } from "./Landing";
//Client side routing
// we use useNavigate Hook provided by react-router-dom to switch between pages. If we use window.location.href instead, it will basically refresh the entire page.
//However we have to use useNavigate inside the BrowserRouter or it wont work

function App() {
  return (
    <div>
      <BrowserRouter>
        <ChangePath />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ChangePath() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/landing");
        }}
      >
        Landing page
      </button>

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
