 const INCREMENT = 'INCRE'
 const DECREMENT = 'DECRE'
 const ADD = 'ADD'
 const SUB = 'SUB'
 const SAVE = 'SAVE'

//action creator  - separate function to generate an action
 function increment(data){
     return { 
         type : INCREMENT,
         payLoad : data
    }
 }

 export function incrementAsync(){
     return (dispatch)=>{
         //write the async task 
         console.log('increment async task started...')
         setTimeout(() => {
            console.log('now dispatching increment action...')
            const data = 100;   //data recd from server
            dispatch(increment(data))
         }, 7000);
        
     }
 }

 export function add(number){
     return {
         type : ADD, 
        payLoad: number
    }
 }

 export function decrement(){
    return {type: DECREMENT}
 }

 export function subtract(number){
     return {type: SUB, payLoad : number}
 }

 export function save(counter){

    

     return {
        type: SAVE, payLoad : counter 
     }
 }


 export default {
     INCREMENT, 
     DECREMENT, 
     ADD, 
     SUB,
     SAVE
 }