import React, {useState} from 'react'

function HookCounterFour() {
    const[text, setText] = useState('')  
    const[item, setItem] = useState('')  
    
    
    

    const addItem = ()=> {

        console.log(text, 'itemmmms')



    }
    const subtractItem = ()=> {

        console.log(item, 'new item')
    }

    return (

        <div>

            <input value={text} onChange={e=>setText(e.target.value)}/>
            <input value={text} onChange={e=>setItem(e.target.value)}/>
            <button onClick={addItem}>Add</button>
            <button onClick={subtractItem}>subtract item</button>


        </div>



    )





}

export default HookCounterFour