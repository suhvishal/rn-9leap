import http from './httpServicee'
import {apiUrl} from '../config.json'
import jwtDecode from 'jwt-decode';

const apiEndPoint = apiUrl + '/auth'

export function login(email, password){
    return http.post(apiEndPoint, {email, password})
}

export function getCurrentUser(){

    try{
        const jwt = localStorage.getItem('token')
        return jwtDecode(jwt)
    }catch(ex){
        return null;
    }
}