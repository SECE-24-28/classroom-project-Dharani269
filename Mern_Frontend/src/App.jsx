import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import "./css/App.css";
import LearningReact from "./components/functionalComponents/LearningReact";
import Contact from "./components/functionalComponents/Contact";
import Login from "./components/functionalComponents/Login";
import Signup from "./components/functionalComponents/Signup";
import UseState from "./components/functionalComponents/Hooks/UseState";
import UseEffect from "./components/functionalComponents/Hooks/UseEffect";
import UseEffectAPI from "./components/functionalComponents/Hooks/UseEffectAPI";
import UseRef from "./components/functionalComponents/Hooks/UseRef";
import UseMemo from "./components/functionalComponents/Hooks/UseMemo";
import UseCallback from "./components/functionalComponents/Hooks/UseCallback";
function App() {
  return (
    <header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/use-state" element={<UseState />}/>
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-effect-api" element={<UseEffectAPI />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallback />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;