import React,{useRef,useState,useEffect} from 'react'

function Test() {
    const inputEl = useRef(null)
    const buttonClick = ()=>{
        inputEl.current.value = 'Hello'
        console.log(inputEl)
    }

    const [text,setText]=useState('shan')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text
        console.log(textRef.current)
    })

    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={buttonClick}>在input上顯示文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}

export default Test
