import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import { data } from '..';
import PathNow from '../../components/PathNow'

function Student(props) {
    
    let StudentData = null
    

    for(let i = 0; i<data.length;i++){
        if(data[i].id == props.match.params.id){
            StudentData=data[i]
        }
    }

    const StudentData2 = data.find(value=>value.id == props.match.params.id)

    if(!StudentData2){
        return (
            <>
                <h1>no data</h1>
                <PathNow/>
                <button onClick={()=>props.history.push('/')}>回首頁</button>
            </>
            )
    }

    return (
        <>
        <PathNow />
            <h1>學生詳細資料</h1>
            {/* 用props.match.params物件得到網址參數 */}
            <div className="card" style={{'width': '18rem'}}>
                <div className="card-header">
                    學號: {StudentData2.id}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">姓名: {StudentData2.name}</li>
                    <li className="list-group-item">生日: {StudentData2.birth}</li>
                </ul>
            </div>
            <button onClick={()=>props.history.push('/')}>回首頁</button>
        </>
    )
}

export default Student
