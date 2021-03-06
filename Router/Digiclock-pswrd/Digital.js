import React, { Component } from "react";

 class Digital extends Component {
  constructor(props) {
    super(props);
    this.state = { ct: new Date().toLocaleTimeString() };
  }
  componentDidMount = () => {
    console.log("After Render ");
    setInterval(() => {
      this.setState({ ct: new Date().toLocaleTimeString() });
    }, 1000);
  };
  componentWillUnmount = () => {
    console.log("Final");
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h1>Digital Clock</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-info">
                  Digital Application : {this.state.ct}
                </div>
                
                <div className="card-body"></div>
                <div className="form-group py-2">
                 <input type="date" name="dob" className="form-control"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Digital;