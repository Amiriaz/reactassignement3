import { useState } from "react"
import SManswer from "./Answer"
import question from "./Question"
import SMresult from "./ResultScreen"
import SMshowResult from "./ShowStatus"

export default function SMQuiz(){

    const [indexNumber, setIndexNumber] = useState(0)
    const [marks, setMark] = useState(0)
    const [score , setScore] = useState(0)
    const [correctAns , setcorrectAns] = useState(0)
    const [showResult , setshowResult] = useState(false)
    const [result , setresult] = useState()
    const [isOn, setIsOn] = useState (false)


    const pass = "Pass"
    const fail = "fail"


    const nextQuestion = () =>{
        
        const next = indexNumber +1;
        if ( next < question.length){
            setIndexNumber(next)
            
        } else{ 
            setshowResult(true)
         }
    }
    
    const checkAns = (selectQuestion, correctAnser) =>{
        if( selectQuestion === correctAnser){
            setMark(marks +1)
            setScore(score +10)
            setcorrectAns(correctAns +1)
            
        } if(score == 70 )
        {
            setresult(pass)
        }
        else{ setresult(fail)}
        

}

    return(
        <div className="app">

            {showResult? (<div><SMresult score= {score} correctAnswer ={correctAns}/> <SMshowResult results = {result}/></div>):(
            <div className="question-section">
            <h2 className="question-count">ARK Quiz</h2>
            <h5 className="question" > <span>Question {indexNumber+1} of {question.length}</span></h5>
            <h5 className=""> 10 Marks {marks}</h5>
            <h5 className="question-text">{question[indexNumber].Question}</h5>

            <div className="answer-section"> 
                {question[indexNumber].Options.map((e, i)=>{
                    return(
                      <button 
                      className="correct"  
                      key={i} 
                      onClick= {()=>checkAns(e,question[indexNumber].CorrectAns)}>{e} </button>
                    )
                })}

                <div className="actions">
                <button>Quit</button>
                <button 
                
                onClick={nextQuestion} 
                className="actions-button">Next</button>
            </div>
        </div>
                
            </div>)}
        
            </div>
            
       
    )
}
