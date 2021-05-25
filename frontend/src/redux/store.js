import {createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({

});

const middleware = [thunk];

const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)) /**composeWithDevTools gives you acess in chrome f12 */
);

export default store; 


