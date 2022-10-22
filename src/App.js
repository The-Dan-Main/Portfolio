
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import About from './Components/About/About';
// import Contact from "./Components/Contact/Contact"
import { ContactWithRouter } from './Components/ContactForm/ContactForm';
import Content from "./Components/Content/Content"
// import Detailed from './Components/Detailed/Detailed';
// import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Submitted from './Components/Submitted/Submitted';

export default function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Dan's Portfolio"
}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Content />} />
          {/* <Route exact path='/about' element={<About />} /> */}
          {/* <Route path='/:key' element={<Detailed />} /> */}
          <Route path='/contact' element={<ContactWithRouter />} />
          <Route path='/contact/submitted' element={<Submitted />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

