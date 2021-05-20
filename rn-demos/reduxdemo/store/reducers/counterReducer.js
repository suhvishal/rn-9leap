
import actionTypes from '../actions/actions'

const INITIAL_STATE = {
    counter : 0
}


function counterReducer(state = INITIAL_STATE, action){

    //check the action type & do the needful to updat ethe state
    switch(action.type){
        case actionTypes.INCREMENT : 
            return {
                ...state,
                counter : state.counter + action.payLoad
            }

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter : state.counter - 1
            }

        case actionTypes.ADD:
            return {
                ...state,
                counter : state.counter + action.payLoad
            }

        case actionTypes.SUB:
            return {
                ...state,
                counter : state.counter - action.payLoad
            }
    }

    return state;

}

export default counterReducer;