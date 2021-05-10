import {combineReducers} from 'redux'
import { counterReducer } from './counterReducer';
import { countListReducer } from './countListReducer';

const rootReducer = combineReducers({
    counterReducer,
    countListReducer
})

export default rootReducer