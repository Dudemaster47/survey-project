import React, { useState } from 'react';


const Inventory = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');

    // const updateValue = (index, value) => {
    //     console.log('updateValue', index, value)
    //     values[index] = value;
    //     console.log('values', values)
    //     setValues(values);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <form onSubmit={handleSubmit}>
        <div><h2>Inventory Assessment</h2></div>
        <div className="inventory-question">
            <p className='inventory-prompt'>I learn the most when the lesson engages my sense of <em>sight</em>.</p>
            <select 
            name='q1'
            onChange={(e) => setValue1(e.target.value)}
            value={value1}
            className='inventory-select'
            >
                <Options />
            </select>
        </div>
        <div className="inventory-question">
            <p className='inventory-prompt'>I learn the most when the lesson engages my sense of <em>hearing</em>.</p>
            <select 
            name='q2'
            onChange={(e) => setValue2(e.target.value)}
            value={value2}
            className='inventory-select'
            >
                <Options />
            </select>
        </div>
        <div className="inventory-question">
            <p className='inventory-prompt'>I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em>.</p>
            <select 
            name='q3'
            onChange={(e) => setValue3(e.target.value)}
            value={value3}
            className='inventory-select'
            >
                <Options />
            </select>
        </div>
        <div className="inventory-question">
            <p className='inventory-prompt'>I learn the most when the lesson engages my <em>vestibular sense</em>.</p>
            <select 
            name='q4'
            onChange={(e) => setValue4(e.target.value)}
            value={value4}
            className='inventory-select'
            >
                <Options />
            </select>
        </div>
        <div className="inventory-question">
            <p className='inventory-prompt'>I learn the most when the lesson engages my sense of <em>proprioception</em>.</p>
            <select 
            name='q5'
            onChange={(e) => setValue5(e.target.value)}
            value={value5}
            className='inventory-select'
            >
                <Options />
            </select>
        </div>
        <div className="form-buttons">
        <button type="submit" disabled={
            !value1 || !value2 || !value3 || !value4 || !value5
        }>SUBMIT TO YOUR OVERLARD</button>
        </div>
    </form>
    );
};

const Options = () => {
    return [
                <option key='prompt' value="" disabled>Select one...</option>,
                <option key='1' value='1'>Strongly Disagree</option>,
                <option key='2' value='2'>Disagree</option>,
                <option key='3' value='3'>Neutral</option>,
                <option key='4' value='4'>Agree</option>,
                <option key='5' value="5">Strongly Agree</option>,
           
    ];
};

export default Inventory;