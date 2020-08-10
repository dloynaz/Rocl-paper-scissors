import React from 'react'
import { useState, useEffect } from 'react'

export const WhoWinTitle = ({ userChoice, computerChoice, scoreValueSetter }) => {
    useEffect(() => {
        winnerSelector()
    }, [userChoice])

    const [winner, setWinner] = useState("")

    const winnerSelector = () => {
        switch (userChoice + computerChoice) {
            case "paperrock":
                setWinner("YOU WIN!")
                scoreValueSetter("user")
                break;
            case "paperpaper":
                setWinner("THIS IS A TIE!")
                scoreValueSetter("tie")
                break;
            case "paperscissor":
                setWinner("THE HOUSE WIN!")
                scoreValueSetter("computer")

                break;
            case "rockscissor":
                setWinner("YOU WIN!")
                scoreValueSetter("user")

                break;
            case "rockrock":
                setWinner("THIS IS A TIE!")
                scoreValueSetter("tie")

                break;
            case "rockpaper":
                setWinner("THE HOUSE WIN!")
                scoreValueSetter("computer")

                break;
            case "scissorpaper":
                setWinner("YOU WIN!")
                scoreValueSetter("user")
                break;
            case "scissorscissor":
                setWinner("THIS IS A TIE!")
                scoreValueSetter("tie")

                break;
            case "scissorrock":
                setWinner("THE HOUSE WIN!")
                scoreValueSetter("computer")

                break;
            default:
               console.log("This is a  funny game!")
        }
    }

    return (
        <h1>{winner}</h1>
    )
}
