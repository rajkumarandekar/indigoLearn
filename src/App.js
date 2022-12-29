import "./App.css";
import AccaSection from "./components/AccaSection";
import Eligibility from "./components/Eligibility";

import Header from "./components/Header";
import Home from "./components/Home";
import KickOff from "./components/KickOff";
import LearnAcca from "./components/LearnAcca";
import PlacementSection from "./components/PlacementSection";
import WhyChoose from "./components/WhyChoose";
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <WhyChoose />
    <AccaSection />
    <Eligibility />
    <LearnAcca />
    <PlacementSection />
    <KickOff />
  </div>
);

export default App;
