import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
    const [title, setTitle] = useState("Welcome!")
    const [count, setCount] = useState(0)
    const [round, setRound] = useState(0)
    const navigate = useNavigate()

    const languages = ["Willkommen!", "¡Bienvenido/a!", "Bienvenue!", "Benvenuto/a!", "Bem-vindo/a!", "Välkommen!", "Hoş geldin!", "Witaj!", "Selamat datang!", "Willkommen!"]

    useEffect(() => {
        setTimeout(() => {
            if (round > 1) {
                setTitle("Welcome!")
                setTimeout(()=>{
                    navigate("/home")
                },1000)
            } else {

                if (count < languages.length) {
                    let newCount = count + 1
                    setCount(newCount)
                    setTitle(languages[count])
                } else {
                    setTitle("Welcome!")
                    setCount(0)
                    let newRound = round + 1
                    setRound(newRound)
                }
            }
        }, 200)
    })

    return (
        <div className="Landing-container">

            <h1 className="title">{title}</h1>
        </div>
    )
}