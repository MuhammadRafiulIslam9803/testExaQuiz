import React from 'react';
import './Contest.css'
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Contst = () => {
    const data = useLoaderData()
    const qustion = data.data.questions;
    console.log(qustion)
    return (
        <div className='context-conteiner'>
                {
                  qustion.map(singleData => <Question 
                  key={singleData.id}
                  singleData={singleData}
                  ></Question>)  
                }            
        </div>
    );
};

export default Contst;