import React ,{useState,useMemo}from 'react'

function Test() {
    const[mary,setMary] = useState('準備上班')
    const[anna,setAnna] = useState('準備上班')

    return (
        <>
          <button onClick={()=>{setMary(new Date().getTime())}}>mary</button>
          <button onClick={()=>{setAnna(new Date().getTime()+'anna剛起床')}}>anna</button>  
          <ChildComponent name={mary}>{anna}</ChildComponent>
        </>
    )
}

function ChildComponent({name,children}){
        function changeAnna(){
            console.log('mary剛起床 吃早餐change')
            return name+'剛起床123'
        }

        const   actionMary = useMemo(()=>changeAnna(name),[name]) 

        return(
            <>
                <div>{actionMary}</div>
                <div>{children}</div>
            </>
        )
}

export default Test
