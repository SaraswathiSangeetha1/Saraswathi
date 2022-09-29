import React, {useState, useEffect} from 'react'
function PracticeUseEffectOne() {

    const[count, setCount] = useState(0)
    const[name, setName] = useState('')

  useEffect ( ()=> {

    document.title = `clicked the button ${count} times`
    document.title = `the name is ${name}`
    console.log('updte document ttitl')

  }, [name] 

  )
return (
<div>
    <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
    <h1>{name}</h1>

    </div>
)
}
    
export default PracticeUseEffectOne
