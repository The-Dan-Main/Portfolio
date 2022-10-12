import './Footer.css'

export default function Footer() {

    return (
        <div>
            <div className="footer container">
                <h3 className="footer-title">Created by Dan Weber (The-Dan-Main)</h3>
                <div className="footer-img">

                    <a href="https://github.com/The-Dan-Main" className="footer-images-container" target="_blank" rel="noreferrer">
                        <img src={require("../../img/github-logo.png")} alt="Github" className="footer-images" title="follow me on Github!"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/dan-weber-zurich/" className="footer-images-container" target="_blank" rel="noreferrer">
                        <img src={require("../../img/LI-In-Bug.png")} alt="linked-in" className="footer-images linked-in" title="follow me on linked-in!"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}