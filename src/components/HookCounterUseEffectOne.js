import React, {useState, useEffect} from 'react'
//tutorial file name is HookCounterOne.js

function HookCounterUseEffectOne() {
    const[count, setCount] = useState(0)
    const[name, setName] = useState('')

useEffect(()=> {
    console.log('updating document title ')
    document.title = `i clicked ${count} times`
}, [count])

return (

    <div>
    <input type='text' value={name} onChange={e=>setName(e.target.value)} />
    <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    <h1>{name}</h1>
    </div>

    )



}

export default HookCounterUseEffectOne