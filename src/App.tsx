import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeKiddo from "./Pages/WelcomeKiddo";
import Page2 from "./Pages/HiPage";
import Page3 from "./Pages/Help";
import Page4 from "./Pages/InstPage";
import Page5 from "./Pages/CardFlip";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeKiddo />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
      </Routes>
    </Router>
  );
};

export default App;
