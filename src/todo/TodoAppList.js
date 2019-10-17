import React from 'react'

const TodoAppList = ({ todos , clickMethod }) => (
  <>
    <ul>
      {todos.map((value, index) => {
          if(value.completed){
            return (
                <li key={value.id}
                onClick={()=>clickMethod(value.id)}>
                >
                <strike>
                {value.text}
                </strike> 
                </li>
                )
          }else{
            return (
                <li 
                key={value.id}
                onClick={()=>clickMethod(value.id)}>
                >
                {value.text} 
                </li>
                )
          }
      })}
    </ul>
  </>
)

export default TodoAppList
