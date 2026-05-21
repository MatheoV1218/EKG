import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Simulation from "./pages/Simulation";
import Results from "./pages/Results";

import NormalSinusRhythm from "./pages/learn/normal-sinus-rhythm/NormalSinusRhythm";
import Bradycardia from "./pages/learn/bradycardia/Bradycardia";
import Tachycardia from "./pages/learn/tachycardia/Tachycardia";
import AfibFlutter from "./pages/learn/afib-flutter/AfibFlutter";
import VentricularRhythms from "./pages/learn/ventricular-rhythms/VentricularRhythms";

import OxygenDevices from "./pages/learn/oxygen-devices/OxygenDevices";
import AirwayManagement from "./pages/learn/airway-management/AirwayManagement";
import RespiratoryDistress from "./pages/learn/respiratory-distress/RespiratoryDistress";
import MechanicalVentilation from "./pages/learn/mechanical-ventilation/MechanicalVentilation";
import Capnography from "./pages/learn/capnography/Capnography";

import CardiacArrest from "./pages/learn/cardiac-arrest/CardiacArrest";
import ShockRecognition from "./pages/learn/shock-recognition/ShockRecognition";
import MedicationBasics from "./pages/learn/medication-basics/MedicationBasics";
import VitalSigns from "./pages/learn/vital-signs/VitalSigns";
import RapidAssessment from "./pages/learn/rapid-assessment/RapidAssessment";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/learn" element={<Learn />} />

          <Route
            path="/learn/normal-sinus-rhythm"
            element={<NormalSinusRhythm />}
          />

          <Route path="/learn/bradycardia" element={<Bradycardia />} />

          <Route path="/learn/tachycardia" element={<Tachycardia />} />

          <Route path="/learn/afib-flutter" element={<AfibFlutter />} />

          <Route
            path="/learn/ventricular-rhythms"
            element={<VentricularRhythms />}
          />

          <Route path="/learn/oxygen-devices" element={<OxygenDevices />} />

          <Route
            path="/learn/airway-management"
            element={<AirwayManagement />}
          />

          <Route
            path="/learn/respiratory-distress"
            element={<RespiratoryDistress />}
          />

          <Route
            path="/learn/mechanical-ventilation"
            element={<MechanicalVentilation />}
          />

          <Route path="/learn/capnography" element={<Capnography />} />

          <Route path="/learn/cardiac-arrest" element={<CardiacArrest />} />

          <Route
            path="/learn/shock-recognition"
            element={<ShockRecognition />}
          />

          <Route
            path="/learn/medication-basics"
            element={<MedicationBasics />}
          />

          <Route path="/learn/vital-signs" element={<VitalSigns />} />

          <Route
            path="/learn/rapid-assessment"
            element={<RapidAssessment />}
          />

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