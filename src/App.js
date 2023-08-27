import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
// import Navigation from "./components/nav/navigation";
import Navigation from './components/nav/Navigation.js';
import Footer from "./components/footer/Footer.js";
function App() {
  return (
    <div className="App">

    <Navigation/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
    </Routes>

    <Footer/>
  </div>
  );
}

export default App;
