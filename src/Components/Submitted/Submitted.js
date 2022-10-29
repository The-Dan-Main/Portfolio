import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Submitted.css'

export default function Submitted() {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(5)
    
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Successfully submitted!"
        setTimeout(() => {
            navigate('/')
          }, 5000)
          count()
    })

    const count = () => {
        const newCount = counter -1
        setTimeout(() => {
            setCounter(newCount)
        }, 1000)
    }

    return (
            <div className="Submitted container">
                <h1>Thank you for your inquiry and i will get back to you shortly!</h1>
                <br></br>
                <h1>Now let's bring you back in <span id='countdown'>{counter}</span></h1>
            </div>
    )
}