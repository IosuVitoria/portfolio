// import './App.scss';
import Navbar from './components/shared/navbar/Navbar'
import Hero from './components/Hero/hero';
import Experience from "./components/experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Notfound from "./components/shared/notfound/NotFound";
import {Route, Routes} from "react-router-dom";
import Footer from './components/shared/footer/Footer';
import Formation from './components/Education/Education';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path = "/" element={<Hero />} /> 
          <Route path = "/home" element={<Hero />} />
          <Route path = "/experience" element={<Experience />} />
          <Route path = "/portfolio" element={<Portfolio />}/>
          <Route path = "/contact" element={<Contact />}/>
          <Route path = "/education" element={<Formation />}/>
          <Route path = "*" element ={<Notfound />}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
