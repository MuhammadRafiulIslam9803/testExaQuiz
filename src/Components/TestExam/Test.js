import React from 'react';
import './Test.css'
import { Link } from 'react-router-dom';

const Test = ({quiz}) => {
    const {name ,logo , id , total} =  quiz
    return (
        <div className='testStyle'>
            <img src={logo} alt="" />
            <h1>{name}</h1>
            <button><Link to={`/home/${id}`}>Attempt Here</Link></button>

        </div>
    );
};

export default Test;