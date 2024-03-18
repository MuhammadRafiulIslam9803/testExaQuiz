import React from 'react';
import './QuestionOption.css'
const QuestionOption = ({perOption}) => {
    // console.log(perOption)
    return (
        <ul className='perOption'>
            <li>{perOption}</li>
            {/* <label>
            <input type="radio" value={perOption} checked={true} />
            {perOption}
          </label> */}
        </ul>
    );
};

export default QuestionOption;