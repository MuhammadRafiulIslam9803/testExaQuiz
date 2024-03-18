import React, { useState } from 'react';
import './Question.css'
import QuestionOption from '../QuestionOption/QuestionOption';
import { clickHere } from '../../Utilities/Fuction';


const Question = ({singleData}) => {
    const {id , question ,correctAnswer ,options }= singleData
    // const [just ,setJust] =useState('correctAns')
    // const clickHere = (id) =>{
    //    setJust( id.style.display='block')
    // }
    return (
        <div className='question-conteiner'>
            <h4>Qus : {question}</h4>
            <h4 id='correctAns' className='correct-ans'>{correctAnswer}</h4>
            <h4>Select Your Answer</h4>
            {/* <div className='queston'>
                {
                    options.map(perOption => <QuestionOption
                    perOption={perOption}
                    ></QuestionOption>)
                }
            </div> */}
            <div className='queston'>
                <form action="">
                
                     <input type="radio" id="html" name="fav_language" value={options[0]}/>
                     <label for="html">{options[0]}</label><br/>
                     <input type="radio" id="css" name="fav_language" value={options[1]}/>
                     <label for="css">{options[1]}</label><br/>
                     <input type="radio" id="javascript" name="fav_language" value={options[2]}/>
                     <label for="javascript">{options[2]}</label><br/>
                     <input type="radio" id="javascript" name="fav_language" value={options[3]}/>
                     <label for="javascript">{options[3]}</label>
                </form>
            </div>
            <div className='btn-class'>
                <button onClick={()=>clickHere()} id='check-ans-btn'>Check Answer</button>
            </div>
        </div>
    );
};

export default Question;