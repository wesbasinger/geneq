import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import reducers from './reducers';
import { generateEquation } from './actions';

import Equation from './containers/Equation';
import Score from './containers/Score';

const store = createStore(reducers);

// bootstrap app with initial equation
store.dispatch(generateEquation(0));


const App = () => (
    <div>
        <h1>GenEq</h1>
        <Equation />
        <Score />
    </div>
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
