const INITIAL_STATE = {
    counter : 0
}



export function rootReducer(state=INITIAL_STATE, action){

    //check the action.type, update the state and return new state
    switch(action.type){
        case 'INCRE':
            return { counter : state.counter + 1 }

        case 'DECRE':
            return { counter : state.counter - 1 }
        
        default :
            return state;
    } 

    
}




 