import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Hreader = () => {
    return (
        <div className='header'>
            <div>
                <h1>Test Exam</h1>
            </div>
            <div className='element'>
                <Link to='/home'>Home</Link>
                <Link to='/static'>Static</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Hreader;