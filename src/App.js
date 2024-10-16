import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import CulturePillar from "./pages/CulturePillar";
import Extra from "./pages/Extra";
import Past from "./pages/sub-pages/Past";
import Present from "./pages/sub-pages/Present";
import Future from "./pages/sub-pages/Future";
import Passion from "./pages/sub-pages/Passion"; // Importando a nova subpágina
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/culture-pillar" element={<CulturePillar />}>
          <Route path="past" element={<Past />} />
          <Route path="present" element={<Present />} />
          <Route path="future" element={<Future />} />
          <Route path="passion" element={<Passion />} />{" "}
          <Route index element={<Navigate to="passion" />} />
        </Route>
        <Route path="/extra" element={<Extra />} />
        <Route path="/extra/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
