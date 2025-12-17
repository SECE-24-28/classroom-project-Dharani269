import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/functionalComponents/Navbar.jsx';
import Home from './components/functionalComponents/Home.jsx';
import HomePage from './components/functionalComponents/HomePage.jsx';
import About from './components/functionalComponents/About.jsx';
import Contact from './components/functionalComponents/Contact.jsx';
import LearningReact from './components/functionalComponents/LearningReact.jsx';
import Login from './components/functionalComponents/Login.jsx';
import Signup from './components/functionalComponents/Signup.jsx';
import UseState from './components/functionalComponents/Hooks/UseState.jsx';
import UseEffect from './components/functionalComponents/Hooks/UseEffect.jsx';
import UseRef from './components/functionalComponents/Hooks/UseRef.jsx';
import UseCallback from './components/functionalComponents/Hooks/UseCallback.jsx';
import UseMemo from './components/functionalComponents/UseMemo.jsx';
import './css/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning-react" element={<LearningReact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hooks/usestate" element={<UseState />} />
        <Route path="/hooks/useeffect" element={<UseEffect />} />
        <Route path="/hooks/useref" element={<UseRef />} />
        <Route path="/hooks/usecallback" element={<UseCallback />} />
        <Route path="/hooks/usememo" element={<UseMemo />} />
      </Routes>
    </Router>
  );
}

export default App;