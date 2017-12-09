import React from 'react';
import { connect } from 'react-redux';

import { generateEquation } from '../actions';

import Latex from 'react-latex';

const Equation = ({dispatch, equations}) => {
    
    const currEquation = equations.pop();
    
    const equationString = `$${currEquation.str}$`;
    
    return (
        <div>
            <Latex>{equationString}</Latex>
            <div>
                <form onSubmit={
                    (event) => {
                        event.preventDefault();
                        const userInput = (event.target[0].value);
                        event.target[0].value = "";
                        if (parseInt(userInput) === currEquation.unknown) {
                            alert("Got it!");
                            dispatch(generateEquation(0));
                        } else {
                            alert("Nope...");
                            dispatch(generateEquation(0));
                        }
                    }
                }>
                    <label>Answer: </label>
                    <input />
                    <button type="submit">Check Answer</button>
                </form>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        equations: state.equations
    }
}

export default connect(mapStateToProps)(Equation);
