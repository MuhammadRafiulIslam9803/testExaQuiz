import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Test from '../TestExam/Test';

const Home = () => {
    const quizSub = useLoaderData()
    const quizdata = quizSub.data
    console.log(quizSub.data)
    return (
        <div>           
            <div className='hStyle'>
                <h1>
                    Select Your Subject And Attempt There !!
                </h1>
            </div>
            <div className='styleForQuiz'>
                {
                quizdata.map(quiz => <Test 
                key={quiz.id}
                quiz= {quiz}
                ></Test>)
                }
            </div>
        </div>
    );
};

export default Home;