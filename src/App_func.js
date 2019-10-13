import React ,{useState} from 'react'



function App() {
  const [total , set_total] = useState(0)
  return (
    <>
      <button onClick={()=>{ set_total(total+1)}}>+</button>
      <h1>{total}</h1>
      <button onClick={()=>{set_total(total-1)}}>-</button>
    </>
  )
}

export default App
