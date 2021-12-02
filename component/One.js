import React from "react"

class One extends React.Component {
    render() {
      return (
        <div className="One">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Facebook</li>
          </ul>
        </div>
      );
    }
  }
  

export default One;