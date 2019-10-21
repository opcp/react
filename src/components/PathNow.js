import React from 'react'
import { withRouter } from "react-router";

const Path = (props)=>{
    return(
        <>
            <h5>你現在的位置：{props.location.pathname}</h5>
        </>
    )
}

export default withRouter(Path)