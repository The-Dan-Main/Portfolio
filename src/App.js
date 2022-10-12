
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contact from "./Components/Contact/Contact"
import Content from "./Components/Content/Content"
import Footer from './Components/Footer/Footer';

export default function App() {


  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/test' element={<h1>Hello</h1>} />

        </Routes>
      </BrowserRouter>




      <Footer />
    </div>
  );
}

