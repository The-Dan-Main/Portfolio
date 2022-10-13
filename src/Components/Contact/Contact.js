import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [type, setType] = useState("Blog")
    const [message, setMessage] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const reset = (e) => {
        e.preventDefault()
        setName("")
        setEmail("")
        setType("Blog")
        setMessage("")
    }



    const handleSubmit = (e) => {
        const data = { name: name, email: email, type: type, message: message }
        // console.log("submitted")
        console.log(data)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodeURI({ "form-name": "contact-form", ...data })
          })
            .then(res => console.log(res))
            .catch(error => alert(error));
          e.preventDefault();
    }

    return (
        <div className='contact-container'>
            <Link to="/" id="backToPortfolioContainer">
                <h3 id="backToPortfolioTitle">Back to Portfolio</h3>
                <img src={require("../Content/images/—Pngtree—hand painted white arrows_6020093.png")} alt="back to Portfolio" id="backToPortfolio"></img>
            </Link>
            <h3>I would love to build something for you!</h3>
            <h3>Let me know what you need:</h3>

            <form
                name="contact-form"
                method="POST"
                data-netlify="true"
                className="form-container"
                // action="/"
                onSubmit={handleSubmit}
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact-form" />
                <p className="hidden">
                    <label>
                        Dont fill this out if youre human: <input name="bot-field" />
                    </label>
                </p>
                <p>
                    <label htmlFor="name">Your Name: </label>
                    <input value={name} required placeholder="type your name here..." type="text" name="name" onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    <label>Your Email: </label>
                    <input value={email} required type="email" name="email" placeholder="type your email address here..." onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Type of Website: </label>
                    <select required name="inquiery Type" onChange={(e) => setType(e.target.value)} value={type}>
                        <option value="Blog">Blog</option>
                        <option value="Info-Site">Info-Page</option>
                        <option value="Company-Site">Company-Page</option>
                        <option value="Other">Other</option>
                    </select>
                </p>
                <p>
                    <label>Message: </label>
                    <textarea
                        required
                        name="Message from costumer"
                        placeholder="describe your project and give me an idea what functions it will need..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    ></textarea>
                </p>
                <label id="ready-title">Ready to send?</label>
                <p id="button-section">
                    <button type="submit" >Send</button>
                    <button type="reset" onClick={(e) => reset(e)}>Reset</button>
                </p>
            </form>

        </div>
    )
}