import React, {useState} from 'react'

function HooCounterFour () {

    const [items, setItems] = useState([])
    const [text, setText] = useState('')    

    const addItem = ()=> { 
        
        setItems([
            ...items,           
            {
                id:items.length,
                name:text
            }

            ])

            setText('')

    }
    console.log(items, text, 'hello items')

    return (
        <div>
            <h1>{text}</h1>

            <input value={text}
            onChange={e=>setText(e.target.value)}
                    
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map(item=>(

                    <li key={item.id}>
                  
                    {item.name}
                                        </li>
                                      
                    
                    ))}
		    </ul>        </div>
    )
}

export default HooCounterFour