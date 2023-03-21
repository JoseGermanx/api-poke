import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigations/Navbar";
import Home from "./components/Pages/Home";
import Poke from "./components/Pages/Poke";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poke" element={<Poke />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
