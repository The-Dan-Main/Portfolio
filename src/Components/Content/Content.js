import { Link } from 'react-router-dom'
import './Content.css'

export default function Content() {

    return (
        <div className='content-container'>
            <div className="container container2">
                <h1 id="heading">Welcome to my Portfolio</h1>
                <h1 id="heading2">Thank you for checking out my projects and i wish you a lot of fun!<br></br>- Dan Weber</h1>
                <h3 id="headingps">PS: Reach out to me for individual projects at the bottom, I'd love to build something for you!</h3>
            </div>
            <h2 id="past-projects-header">Past Projects</h2>
            <div className="container">


                <a href="https://mysimple-calculator.netlify.app/" target="_blank" rel="noreferrer">
                    <div className="description-pointer">?</div>
                    <span className="black-to-white-description">First project:<br></br>'A simple calculator, which I built from scratch'</span>
                    <img src={require("./images/calculator.png")} alt="my first project - a simple calculator" id="img-calculator"></img>
                </a>
                <a href="https://todoay-list.netlify.app/" target="_blank" className="white-container" rel="noreferrer">
                    <div className="description-pointer">?</div>
                    <span className="white-to-black-description">Second project:<br></br>'A multi-page todo-list with filter functions'</span>
                    <img src={require("./images/Todo list.png")} alt="my second project - a to do list" id="img-todolist"></img>
                </a>
                <a href="https://quote-generator-c9.netlify.app/" target="_blank" className="white-container" id="quote" rel="noreferrer">
                    <div className="description-pointer">?</div>
                    <span className="white-to-black-description">Second project:<br></br>'a quote generator with style settings'</span>
                    <img src={require("./images/quoteGenerator.png")} alt="my third project - a quote generator" id="img-quote-generator"></img>
                </a>

            </div>
            <h2>Current Projects</h2>
            <div>
                <h3 id="current-info">Still under constrution, so be careful...</h3>
                <div className="container">

                    <a href="https://countries-of-the-world-dan.netlify.app/" target="_blank" className="black-container" id="country" rel="noreferrer">
                        <div className="description-pointer">?</div>
                        <span className="black-to-white-description">Country Project:<br></br>'a simple ReactJS API interface to get infos about countries'</span>
                        <img src={require("./images/country.png")} alt="coming soon" id="img-TBA"></img>
                    </a>

                    <a href="https://there-be-games.netlify.app/" target="_blank" className="blacks-container" id="TBG" rel="noreferrer">
                        <div className="description-pointer">?</div>
                        <span className="black-to-white-description">There'll be Games:<br></br>'a more complex ReactJS & API project about video games'</span>
                        <img src={require("./images/TBG.png")} alt="coming soon" id="img-TBA"></img>
                    </a>
                </div>
            </div>

            <h2>Future Projects</h2>
            <div id="future-projects-container">
                <h3 id="current-info">Well, we'll see what the future brings... but definitely more projects!</h3>
            </div>
            <h2>Contact me</h2>

            <div className="contact container">
                <Link to="/contact" className="contact-title">click here to get to my contact form</Link>

            </div>
        </div>
    )
}