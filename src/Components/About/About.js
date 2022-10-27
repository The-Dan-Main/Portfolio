import './About.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function About(props) {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            // navigate("/home")
        }, 3000)
    })


    return (
        <div className="About-container">
            <Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen} toggleMenu={props.toggleMenu} />

            <h1>Not yet finished, should be done soon!</h1>
            {/* <img src={require("../../img/1.png")} alt="cv" />
            <img src={require("../../img/2.png")} alt="cv" /> */}

        </div>
    )
}