import React,{Component} from "react";
import Navbar from './component/Navbar';
import Router from './component/Router';
class App extends Component{
  render(){
    return <div>
<Navbar />
<Router />
    </div>
  }
}

export default App;