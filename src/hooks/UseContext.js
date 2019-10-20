import React, { useState , createContext , useContext} from 'react';

const CountContext = createContext(); //父組件 負責提供值



function Counter(){
    let count  = useContext(CountContext)
    return (<h2>{count}</h2>)
}

function Example() {

    const [count, setCount] = useState(0)
    return (
        <>
            <p>click {count} </p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            {/* 要提供的值 */}
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </>
    )
}

export default Example