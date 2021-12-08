import React from 'react';
class Router extends React.Component{
    state={
        counter:0,
    };
    IncrHandler=()=>{
     this.setState({counter:this.state.counter +1});
    };
    DecrHandler=()=>{
        this.setState({counter:this.state.counter -1});
       };
    render()
    {
        console.log("Test case-1");
        return<>
        <div className="container mt-2">
        <div className="row">
        <div className="col-md-2">
        <div className="card">
        <div className="card-header">HOME:{this.state.counter}</div>
        <div className="card-body"></div>
        <button className="btn btn-success mr-4"onClick={this.DecrHandler}>DECR</button>
        <button className="btn btn-primary " onClick={this.IncrHandler}>INCR</button>
            </div>
            </div>    
            </div> 
            </div>
        </>
    }
}
export default Router;