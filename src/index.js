import React from 'react';
import ReactDOM from 'react-dom';

import Latex from 'react-latex';

import generator from './generator';

const Equation = () => (
    <Latex>$x + 2 = 9$</Latex>
)

const App = () => (
    <div>
        <h1>GenEq</h1>
        <Equation />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
