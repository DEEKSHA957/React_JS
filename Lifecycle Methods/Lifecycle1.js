import React, { Component } from 'react';  
class Lifecycle1 extends Component {  
constructor(props) {  
super(props);  
this.state = {msg: "World"};  
this.changeState = this.changeState.bind(this)  
}    
render() {  
return (  
<div>  
<h1>Lifecycle</h1>  
<h3>Hello {this.state.msg}</h3>  
<button onClick = {this.changeState}>Click to Update</button>          
</div>  
);  
}  
componentWillMount() {  
console.log('Action: Component Will MOUNT!')  
}  
componentDidMount() {  
console.log('Action: Component Did MOUNT!')  
}  
changeState(){  
this.setState({msg:"A beautiful day ahead. Keep Smiling!!!!!"});  
}  
componentWillReceiveProps(newProps) {      
console.log('Action: Component Will Receive Props!')  
}  
shouldComponentUpdate(newProps, newState) {  
return true;  
}  
componentWillUpdate(nextProps, nextState) {  
console.log('Action: Component Will UPDATE!');  
}  
componentDidUpdate(prevProps, prevState) {  
console.log('Action: Component Did UPDATE!')  
}  
componentWillUnmount() {  
console.log('Action: Component Will UNMOUNT!')  
}  
}  
export default Lifecycle1;