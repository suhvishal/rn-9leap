import React from 'react';
import { Route } from 'react-router-dom';
import { getCurrentUser } from '../../services/authService';
import { Redirect } from 'react-router-dom';

function ProtectedRoute({path, component:Component, render}) {
    
    return (
        <Route  path={path} 
            render= { (props)=> {
                if(!getCurrentUser()) return <Redirect to='/login' />

                return Component ? <Component {...props} /> : render(props) 
            }} />
    )
}

export default ProtectedRoute;