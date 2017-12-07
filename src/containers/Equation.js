import React from 'react';
import { connect } from 'react-redux';

import Latex from 'react-latex';

const Equation = ({equations}) => (

    <Latex>$x + 2 = 9$</Latex>
)

const mapStateToProps = state => {
    return {
        equations: state.equations
    }
}

export default connect(mapStateToProps)(Equation);
