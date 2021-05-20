import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { act } from 'react-test-renderer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
//create your own  middleware or you can use redux-thunk / redux saga

const loggingMiddleware = (store)=> {
    return (next)=> {
        return (action)=>{
            //write your async code here
            if(action.type === 'SAVE'){
                    console.log(`Save button is clicked... we are going to save the ${action.payLoad} to data slice `)
                    setTimeout(() => {
                        console.log('async task completed...now sending action to reducer..')
                        next(action)
                    }, 7000);
            }

            next(action)
        }
      
    }
}


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggingMiddleware, thunk)));

export default store;