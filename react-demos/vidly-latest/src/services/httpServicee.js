import  Axios  from 'axios';



Axios.interceptors.response.use(null, error => {

    const expectedError = error.response && 
                            error.response.status >= 400 &&
                            error.response.status < 500

    if(!expectedError){
        //show a generic message
        alert('An unexpected error occured')
        //log the error using a logger system
    }

    return Promise.reject(error)
})

 function setJwt(jwt){
    Axios.defaults.headers.common['x-auth-token'] = jwt
}
 
export default {
    get : Axios.get, 
    post : Axios.post, 
    delete : Axios.delete,
    put : Axios.put,
    patch : Axios.patch,
    setJwt: setJwt
}