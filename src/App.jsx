import Navbar from './Navbar.jsx'
import "./css/App.css";
import ClassComponent from './ClassComponent.jsx';

function App() {
  const h1Style = {
    backgroundColor: "magenta",
    textAlign: "center",
    color: "white"
  }
  
  const h2Style = {
    backgroundColor: "#20b2aa",
    textAlign: "center",
    color: "black",
    padding: "15px"
  }
  
  return (
    <>
      <Navbar />
      <p>The above content is Navbar</p>
      <h1 style={h1Style}>Welcome to Derry</h1>
      <h2 style={h2Style}>This is simple react</h2>
      <ClassComponent />
      <img 
        src="vite.svg" 
        alt="Vite logo" 
        style={{
          display: "block",
          margin: "20px auto",
          height: "200px"
        }} 
      />
    </>
  );
}

export default App;