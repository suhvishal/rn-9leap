import http from './httpService'
import {apiUrl} from '../../config.json';

const apiEndPoint = apiUrl + '/search?query='

export function getLocationId(city){
    console.log(apiUrl)
    return http.get(apiEndPoint+city)
}

export function getWeather(woeid){
    return http.get(apiUrl + '/' + woeid)
}