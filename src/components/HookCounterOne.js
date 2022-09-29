import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const[count, setCount] = useState(0)

    useEffect(()=> {

document.title = `i clicked ${count} times`
    }


    )



return (

    <div>

        <button onClick={()=>setCount(count +1)}>clicked {count} times</button>
    </div>



)





}



export default HookCounterOne 