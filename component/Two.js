import React from "react"

class Two extends React.Component {
    render() {
      return (
        <div className="Two">
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
  

export default Two;