import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect=>you clicked ${count} times.`)
    })
    return (
        <div>
            <p>click {count} </p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}

export default Example