import http from './httpServicee'
import {apiUrl} from '../config.json'
import jwtDecode from 'jwt-decode';

http.setJwt(getJwt())

const apiEndPoint = apiUrl + '/auth'

export async function login(email, password){
    const {data : jwt} = await http.post(apiEndPoint, {email, password})
    localStorage.setItem('token', jwt)
}

export function loginWithJwt(jwt){
    localStorage.setItem('token', jwt)
}

export function getJwt(){
    return localStorage.getItem('token')
}

export function removeToken(){
    localStorage.removeItem('token')
}

export function getCurrentUser(){

    try{
        const jwt = localStorage.getItem('token')
        return jwtDecode(jwt)
    }catch(ex){
        return null;
    }
}