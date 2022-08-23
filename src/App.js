import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstStep from "./step-1/FirstStep";
import { observableUserStore } from "./step-1/store";
import HomePage from "./HomePage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/step/1" element={<FirstStep store={observableUserStore} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
