import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Content.css'

export default function Content(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Dan's Portfolio"

    }, [])

    return (
        <div className='content-container'>
            <Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen} toggleMenu={props.toggleMenu} />

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
    )
}