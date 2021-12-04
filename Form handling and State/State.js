import React from "react";
class State extends React.Component {
  state = {
    msg: "Hello, Boss:",
  };
  gmHandler() {
    console.log(this.state.msg);
    this.setState({ msg: "Hello, Good Morning. Have a nice day" });
    //this.state.msg = "Hello, Mr Rajini Kanth";
    console.log(this.state.msg);
  }
  gaHandler = () => {
    this.setState({ msg: "Hello, Good Afternon" });
  };
  gnHandler = () => {
    this.setState({
      msg: "Hello, Good Night",
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button
          className="btn btn-success"
          onClick={() => {
            this.gmHandler();
          }}
        >
          GM
        </button>
        <button className="btn btn-primary" onClick={this.gaHandler}>
          GA
        </button>
        <button className="btn btn-danger" onClick={this.gnHandler}>
          GN
        </button>
      </div>
    );
  }
}
export default State;