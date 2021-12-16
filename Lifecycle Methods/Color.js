import React from 'react';
class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'lightgreen' };
  }
  componentDidMount() {
  
    setTimeout(() => {
      this.setState({ color: 'yellow' });
    }, 2000);
  }
  render() {
    return (
      <div>
        <p
          style={{
            color: this.state.color,
            backgroundColor: 'rgba(0,0,0,0.88)',
            textAlign: 'center',
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: 'auto'
          }}
        >
         Hellooo !!! How are you ??? Hope you are doing good.
        </p>
      </div>
    );
  }
}
export default Color;