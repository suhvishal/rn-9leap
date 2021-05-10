import React, { Component } from 'react';

class ErrorBoundary extends Component {


    state = {
        hasError : false
    }

    static getDerivedStateFromError(error){
        return { hasError : true}
    }


    componentDidCatch(error, errorInfo){
        //loggerService
        console.log('error', error)
        console.log('errorinfo', errorInfo)
    }


    render() {

        if(this.state.hasError){
            return (
                <div>
                    <h1>Something went wrong</h1>
                </div>
            );
        }

        return this.props.children;
        
    }
}

export default ErrorBoundary;