import React, { useState, useEffect } from 'react';
import useDocumentTitle from './changeDocumentTitle';

function AnotherCounter(props) {

    const [count, setCount] = useState(()=>{
        //logic to get the value you want have as a stateful value 
        return 0;
    })
    const [posts, setPosts] = useState([])

    useEffect(async ()=>{
       const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
       const result = await response.json()
       setPosts(result)
       alert('got posts from server')
    }, [posts])

    useDocumentTitle(`You clickd ${count} times`)

    return (
        <div>
            <h1>Posts : {posts.length}</h1>

            Count : {count}
            <button onClick={()=> setCount(count+1)}>
                Increment
            </button>
        </div>
    );
}

export default AnotherCounter;