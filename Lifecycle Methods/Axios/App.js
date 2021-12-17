import React from "react";
import List from "./component/List";
import Add from "./component/Add";
import Delete from "./component/Delete";
class App extends React.Component {
  render() {
    return (
      <div>
        <List/>
        <Add/>
        <Delete/>
      </div>
    );
  }
}
export default App;