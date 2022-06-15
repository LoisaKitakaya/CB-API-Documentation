import { Routes, Route } from "react-router-dom";

import "./css/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Documentation from "./pages/Documentation";

const App = () => {
  return (
    <div className="App">
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      {/* routes */}
    </div>
  );
};

export default App;
