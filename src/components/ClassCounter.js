import React, {Component} from 'react'

class  ClassCounter extends Component {
constructor (props) {
    super()

    this.state={count:2}
                }

incrementCount = ()=> {

    this.setState({count:this.state.count + 1})
}
 

render() {

const {count} = this.state
console.log(this.state)

return (
<div>
    <h1>{count}</h1>
    
<button onClick={this.incrementCount}>count me {count}</button>

</div>

)


}

}









export default ClassCounter