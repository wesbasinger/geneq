import React from 'react';
import { connect } from 'react-redux';

import Latex from 'react-latex';

const Equation = ({equations}) => {
    
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
                        if(parseInt(userInput) === currEquation.unknown) {
                            alert("Got it!");
                        } else {
                            alert("Nope...")
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
