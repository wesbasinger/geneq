import React from 'react';
import { connect } from 'react-redux';

import Latex from 'react-latex';

const Equation = ({equations}) => {
    
    const currEquation = equations.pop();
    
    const equationString = `$${currEquation.str}$`;
    
    return (
        <div>
            <Latex>{equationString}</Latex>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        equations: state.equations
    }
}

export default connect(mapStateToProps)(Equation);
