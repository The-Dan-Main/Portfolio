import React from "react";
import { Link } from "react-router-dom";
import "./ContactForm.css"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "", age: "", type: "Blog" };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    /* Here’s the juicy bit for posting the form submission */

    reset = (e) => {
        e.preventDefault()
        this.setState({ name: "", email: "", message: "", age: "", type: "Blog" })
    }

    handleSubmit = e => {
        console.log(this.state)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => console.log("Successfully submitted!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    // handleSelectChange = e => {
    //     console.log(e.target.name)
    //     this.setState({ [e.target.name]: e.target.value })};

    render() {
        const { name, email, message, type } = this.state;
        return (
            <div className='contact-container'>
                <Link to="/" id="backToPortfolioContainer">
                    <h3 id="backToPortfolioTitle">Back to Portfolio</h3>
                    <img src={require("../Content/images/—Pngtree—hand painted white arrows_6020093.png")} alt="back to Portfolio" id="backToPortfolio"></img>
                </Link>
                <h3>I would love to build something for you!</h3>
                <h3>Let me know what you need:</h3>

                <form onSubmit={this.handleSubmit} className="form-container" >
                    <p>
                        <label>
                            Your Name:<br></br>
                            <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email:<br></br>
                            <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>Type of Website:<br></br>
                            <select required name="type" onChange={this.handleChange} value={type}>
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
                            <textarea name="message" value={message} onChange={this.handleChange} />
                        </label>
                    </p>
                    <label id="ready-title">Ready to send?</label>
                    <p id="button-section">
                        <button type="submit" >Send</button>
                        <button type="reset" onClick={(e) => this.reset(e)}>Reset</button>
                    </p>
                </form>

            </div>
        );
    }
}

export default ContactForm