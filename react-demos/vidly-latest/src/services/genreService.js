import { func } from 'prop-types'
import http from './httpServicee'
import {apiUrl} from '../config.json'

const apiEndPoint = apiUrl+ '/genres'

export function getGenres(){
    return http.get(apiEndPoint)
}