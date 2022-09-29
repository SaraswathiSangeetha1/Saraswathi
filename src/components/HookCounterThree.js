import React, {useState} from 'react'

function HookCounterThree() {
const[name, setName] = useState({firstName:'', lastName:''})

return (
    <form>
        <input type='text' value={name.firstName} onChange={e=>setName({...name, firstName:e.target.value})}/>

        <input type='text' value={name.lastName} onChange={e=>setName({...name, lastName:e.target.value})}/>

        <h1>your first name is : {name.firstName}
        
         <h1></h1>your second name is : {name.lastName}</h1>



    </form>




)









}
















/*function HookCounterThree() {    
    const[name, setName] = useState({firstName:'', lastName:''})
console.log(name, setName)

    return (

        <form>
            <input type='text' value={name.firstName} onChange={e=>setName({...name, firstName:e.target.value})}/>
            <input type='text' value={name.lastName} onChange={e=>setName({...name, lastName:e.target.value})}/>            
            <h2>your name is {name.firstName}</h2>
            <h2>your last name is {name.lastName}</h2>
            {JSON.stringify(name)}
        </form>
          )
}
 */
export default HookCounterThree

