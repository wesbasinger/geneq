import React from 'react';

import { connect } from 'react-redux';

const Score = ({score}) => {
    
    return (
        <div>
            <p>Current Score: {score}</p>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps)(Score);
