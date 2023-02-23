import { useState } from "react"
import question from "./Question"
import SMQuiz from "./QuestionDetail"

function SMresult (props){
    
return (
    <div className="score-section">
        <h1 className="completed">Completed</h1>
        <h3>Total Score {props.score}</h3>
        <h3>Your Correct Question {props.correctAnswer}</h3>


    </div>
)
}

export default SMresult
        
