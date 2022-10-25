import './About.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/home")
        }, 3000)
    })


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
            <div className="About-container">
                <h1>Not yet finished, should be done soon!</h1>
                {/* <img src={require("../../img/1.png")} alt="cv" />
            <img src={require("../../img/2.png")} alt="cv" /> */}

            </div>
        </div>
    )
}