import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Content.css'

export default function Content() {
    const [isOpen, setIsOpen] = useState(0)

    
    
    const toggleMenu = () => {
        isOpen === 1 ? setIsOpen(0) : setIsOpen(1)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
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
            <div className='content-container'>
                {isOpen === 1 && <Navbar />}
                <label htmlFor="check" className='navbar-menu' >
                    <input type="checkbox" id="check" onClick={()=>toggleMenu()}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className="content-introduction">
                    <h2 className="content-intro-title">Dan Weber</h2>
                    <h2 className="content-intro-position">Junior Front-End Developer</h2>
                    <p className="content-intro-desc">
                        Hello there! After an adventerous carreer in hospitality, I found a new and ravishing passion!
                        I am a young developer from downtown Zurich, Switzerland and love to build front-end / fullstack projects.
                    </p>
                </div>


                <div className="PageLink-Container">
                    <Link to="/projects" className="content-PageLinks"><span data-content="PROJECTS" aria-hidden="true"></span>PROJECTS</Link>
                    <Link to="/contact" className="content-PageLinks"><span data-content="CONTACT" aria-hidden="true"></span>CONTACT</Link>
                    <Link to="/about" className="content-PageLinks"><span data-content="ABOUT" aria-hidden="true"></span>ABOUT</Link>
                </div>

            </div>
        </div>
    )
}