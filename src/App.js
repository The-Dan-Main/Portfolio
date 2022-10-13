
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Contact from "./Components/Contact/Contact"
import { ContactWithRouter } from './Components/ContactForm/ContactForm';
import Content from "./Components/Content/Content"
import Footer from './Components/Footer/Footer';
import Submitted from './Components/Submitted/Submitted';

export default function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
    window.title = "Dan's Portfolio"
}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/contact' element={<ContactWithRouter />} />
          <Route path='/contact/submitted' element={<Submitted />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

