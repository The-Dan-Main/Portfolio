import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./ContactForm.css"


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "", type: "Inital" };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "Contact Form"
    }


    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    reset = (e) => {
        e.preventDefault()
        this.setState({ name: "", email: "", message: "", type: "Inital" })
    }

    handleSubmit = e => {

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ "form-name": "contact", ...this.state })
        })
            .catch(error => alert(error));

        this.props.navigate('/contact/submitted')
        e.preventDefault();
        this.reset()
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message, type } = this.state;
        return (
            <div className='contact-container'>
                <Navbar isOpen={this.props.isOpen} setIsOpen={this.props.setIsOpen} toggleMenu={this.props.toggleMenu} />

                <div className="contact-intro">
                    <h3>I would love to build something for you!</h3>
                    <h3>Let me know what you need:</h3>
                </div>

                <div className="contact-divider">
                </div>

                <form onSubmit={this.handleSubmit} className="form-container" >
                    <p>
                        <label>
                            Your Name:<br></br>
                            <input type="text" required name="name" value={name} onChange={this.handleChange} placeholder="type your name here..."/>
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email:<br></br>
                            <input type="email" required name="email" value={email} onChange={this.handleChange} placeholder="type your email here..." />
                        </label>
                    </p>
                    <p>
                        <label>Type of Website:<br></br>
                            <select name="type" required onChange={this.handleChange} value={type}>
                                <option value="Inital">Please choose...</option>
                                <option value="Blog">Blog</option>
                                <option value="Info-Site">Info-Page</option>
                                <option value="Company-Site">Company-Page</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </p>
                    <p>
                        <label>Message:<br></br>
                            <textarea name="message" required value={message} onChange={this.handleChange} placeholder="tell me everything you want to share..." />
                        </label>
                    </p>
                    {/* <label id="ready-title">Ready to send?</label> */}
                    <p id="button-section">
                        <button type="submit" >Send</button>
                        <button type="reset" onClick={this.reset}>Reset</button>
                    </p>
                </form>

            </div>
        );
    }
}


export function ContactWithRouter(props) {
    document.title = "Contact Form"
    const navigate = useNavigate()
    return (<ContactForm navigate={navigate} isOpen={props.isOpen} setIsOpen={props.setIsOpen} toggleMenu={props.toggleMenu} />)
}

export default ContactForm