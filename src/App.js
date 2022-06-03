import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Competencies from "./components/Competencies"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/competencies" element={<Competencies/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
