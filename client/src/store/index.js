import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import LocalStorageMiddleware from "../middlewares/localStorageMiddleware";
import authorizationReducer from "../reducers/userReducers";


const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true, traceLimit: 25,
    }) : compose;

const middleware = applyMiddleware(thunk, LocalStorageMiddleware);

const rootReducer = combineReducers({
    auth: authorizationReducer,
    // messages: getMessagesReducer,
    // newMessage: addMessageReducer,
});

const initialState = {

};

const getInitialState = () => {
    if (sessionStorage.getItem('sessionData')) {
        const session = JSON.parse(sessionStorage.getItem('sessionData'));
        console.log(session)
        if (Object.keys(session).length !== 0) {
            initialState.auth = {
                name: session.name,
            }
        }
    }

    return initialState;
};


export default createStore(rootReducer, getInitialState(), composeEnhancers(
    middleware,
));