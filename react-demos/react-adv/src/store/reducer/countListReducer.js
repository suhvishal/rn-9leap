const INITIAL_STATE = {
    countList: []
}

export function countListReducer(state=INITIAL_STATE, action){

    //check the action.type, update the state and return new state
    switch(action.type){
    
        case 'SAVE':
            const countList = [ ...state.countList, action.data ]
            return {
                ...state,
                countList
            }

        case 'REMOVE':
            const countList2 = [ ...state.countList]
            countList2.splice(action.data, 1)
            return {
                ...state,
                countList: countList2
            }

        default :
            return state;
    } 

    
}




 