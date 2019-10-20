import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom'

function Index() {
    useEffect(()=>{
        console.log('useEffect:Index')
        return ()=>{
            console.log('Index end')
        }
    },[])
    return (
        <>
            <h1>
                youtube.ocm
            </h1>
        </>
    )
}

function List() {
    useEffect(()=>{
        console.log('useEffect:List')
    })
    return (
        <>
            <h1>
                listpage
            </h1>
        </>
    )
}




function Example() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect=>you clicked ${count} times.`)
        return ()=>{
            console.log('====================')
        }
    },[count])
    return (
        <div>
            <p>click {count} </p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/list/">列表頁</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/"  component={List} />
            </Router>
        </div>
    )
}

export default Example