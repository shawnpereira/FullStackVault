import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// Use React.lazy to lazy load components
const Dashboard = React.lazy(() => import("./Dashboard"));
const Landing = React.lazy(() => import("./Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <ChangePath />
        {/* Use Suspense to show a loading indicator while components are loading */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* It needs to be wrapped inside the suspense component */}
          <Routes>
            {/* Use React.Suspense to wrap routes that might contain lazily loaded components */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </Suspense>
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
