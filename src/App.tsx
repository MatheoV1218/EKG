import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Simulation from "./pages/Simulation";
import Results from "./pages/Results";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;