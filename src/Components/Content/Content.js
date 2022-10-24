import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Content.css'

export default function Content() {

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
                <Navbar />

                <div className="content-introduction">
                    <h2 className="content-intro-title">Dan Weber</h2>
                    <h2 className="content-intro-position">Junior Front-End Developer</h2>
                    <p className="content-intro-desc">
                        Hello there! After a adventerous carreer in hospitality, I found a new and ravishing passion! <br />
                        I am a young developer from downtown Zurich, Switzerland and love to build front-end / fullstack projects.
                    </p>
                </div>




                <Link to="/contact" className="contact-title">click here to get to my contact form</Link>

            </div>
        </div>
    )
}