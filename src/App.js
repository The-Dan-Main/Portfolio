import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import { ContactWithRouter } from './Components/ContactForm/ContactForm';
import Content from "./Components/Content/Content"
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import Submitted from './Components/Submitted/Submitted';

export default function App() {
  const [isOpen, setIsOpen] = useState(0)

  const toggleMenu = (e) => {
    const container = e.target.parentElement.parentElement
    container.classList.toggle("isNotOpen")
    isOpen === 1 ? setIsOpen(0) : setIsOpen(1)
}

  return (
    <div className="App">
      <div className="content-wrap">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />} />
            <Route path='/home' element={<Content isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />} />
            <Route path='/about' element={<About isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />} />
            <Route path='/projects' element={<Projects isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />} />
            <Route path='/contact' element={<ContactWithRouter isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />} />
            <Route path='/contact/submitted' element={<Submitted isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />} />
          </Routes>
        </BrowserRouter>
        <div className="rotateScreen">
          <img src={require("./img/smartphone.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

