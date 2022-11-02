import './About.css'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'

export default function About(props) {

    useEffect(() => {
        document.title = "Dan's Portfolio - ABOUT"
    })


    return (
        <div className="About-container">
            <Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen} toggleMenu={props.toggleMenu} />
            <div className="about-wrapper">

            <div className="about-intro-container">
                <img src={require("../../img/map-dark.png")} alt="" className='about-map-img' />
                <h2 className="about-intro-title">
                    My Story
                </h2>
                <p className='about-intro-desc'>
                    As the son of an SAP-engineer, I spent most of my time on the computer. Right after school, I became a chef and studied international hotel management. <br /><br /> After some years of demanding work, I found a new passion in coding. Besides working 100% as a Assistant Manager for a Hotel with ~450 rooms, I learned every day for 3-4 hours. <br /> I fell in love with the simplicity and logic of coding. Each hurdle, which i encountered and every bug i had to fix, pushed me forward and ignited my thirst to learn further. <br /><br /> Now is my time to gain some field experience and I am looking for someone to give me a chance to grow. <br /> <br /> My thrive is to learn & experience as much as possible and dive deep into this fascinating and vivid world!
                </p>

            </div>

            <div className="about-tech-container">
                <img src={require("../../img/dan.png")} alt="" className='about-portrait-img' />

                <h2 className="about-tech-title">Languages, Technologies and Libraries</h2>
                <ul className='about-tech-list'>
                    <li className='about-tech-list-element'>CSS</li>
                    <li className='about-tech-list-element'>HTML</li>
                    <li className='about-tech-list-element'>React-JS</li>
                    <li className='about-tech-list-element'>Javascript</li>
                    <li className='about-tech-list-element'>SQL - MYSQL</li>
                    <li className='about-tech-list-element'>Java - Basics</li>
                    <li className='about-tech-list-element'>Python - Basics</li>
                    <li className='about-tech-list-element'>React Router V6</li>
                    <li className='about-tech-list-element'>Express-JS & Node-JS</li>
                    <li className='about-tech-list-element'>React Context + Redux</li>
                    <li className='about-tech-list-element'>Github & VersionControl</li>
                </ul>
            </div>
            </div>
        </div>
    )
}