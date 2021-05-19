 const INCREMENT = 'INCRE'
 const DECREMENT = 'DECRE'
 const ADD = 'ADD'
 const SUB = 'SUB'
 const SAVE = 'SAVE'

//action creator  - separate function to generate an action
 export function increment(){
     return { 
         type : INCREMENT 
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