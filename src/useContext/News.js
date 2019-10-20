import React,{useContext} from 'react'
import {UserContext} from '../UserContext'


const News = () => {
    const {user} = useContext(UserContext)
    return (
        <>
        <h1>新聞</h1>
        <pre>{JSON.stringify(user,null,2)}</pre>
        </>
    )
}

export default News