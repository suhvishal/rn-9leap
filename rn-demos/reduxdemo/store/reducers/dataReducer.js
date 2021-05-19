
import actionTypes from '../actions/actions'

const INITIAL_STATE = {
    data : [ ]
}


function dataReducer(state = INITIAL_STATE, action){

    //check the action type & do the needful to updat ethe state
    switch(action.type){
    
        case actionTypes.SAVE:
            const data = [  ...state.data, action.payLoad]
            return {
                ...state,
                data
            }
    }

    return state;
}

export default dataReducer;