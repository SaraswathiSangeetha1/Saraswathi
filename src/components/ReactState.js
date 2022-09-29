import React, {useState} from 'react'

function ReactState() {
const initialCount = 0

const[count, setCount] = useState(initialCount)


return (

    <div>
        count {count}
        <button onClick={()=>setCount(initialCount)}>Reset Count </button>
        <button onClick={()=>setCount((prevCount)=> prevCount+1)}>Increment Count </button>
        <button onClick={()=>setCount((prevCount)=> prevCount-1)}>Decrement Count </button>
        <h1>hi</h1>
        
    </div>

)
}
export default ReactState