import './About.css'
import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function About(props) {
    // const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            // navigate("/home")
        }, 3000)
    })


    return (
        <div className="About-container">
            <Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen} toggleMenu={props.toggleMenu} />

            <id className="about-intro-container">

            </id>
            <div className="about-tech-container">

            </div>
            <div className="about-map-container">

            </div>


        </div>
    )
}