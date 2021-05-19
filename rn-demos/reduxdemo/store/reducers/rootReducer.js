
const INITIAL_STATE = {
    counter : 0
}


function rootReducer(state = INITIAL_STATE, action){

    //check the action type & do the needful to updat ethe state
    switch(action.type){
        case 'INCRE' : 
            return {
                counter : state.counter + 1
            }
    }

    return state;
}

export default rootReducer;