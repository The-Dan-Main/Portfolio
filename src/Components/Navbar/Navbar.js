

import { Link } from "react-router-dom"
import "../Navbar/Navbar.css"

export default function Navbar() {

    return (
        <div className="Navbar-container">
            <div className="navbar-icons">
                <a href="https://github.com/The-Dan-Main" className="footer-images-container" target="_blank" rel="noreferrer">
                    <img src={require("../../img/github-logo.png")} alt="Github" className="navbar-images" title="follow me on Github!"></img>
                </a>
                <a href="https://www.linkedin.com/in/dan-weber-zurich/" className="footer-images-container" target="_blank" rel="noreferrer">
                    <img src={require("../../img/LI-In-Bug.png")} alt="linked-in" className="navbar-images linked-in" title="follow me on linked-in!"></img>
                </a>
            </div>
            <div className="navbar-links">
                <Link to="/home" className="navbar-link" >Home</Link>
                <Link to="/projects" className="navbar-link" >Projects</Link>
                <Link to="/about" className="navbar-link" >About</Link>
                <Link to="/contact" className="navbar-link" >Contact</Link>
            </div>

        </div>
    )
}