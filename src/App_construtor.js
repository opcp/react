import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      add: 456,
    }
  }
  
  handle_click = value => {
    this.setState({
      total: this.state.total + value,
    })
  }

  render() {
    return (
      <>
        <button onClick={() => this.handle_click(1)}>+</button>
        <h1>{this.state.total}</h1>
        <button onClick={() => this.handle_click(-1)}>-</button>
      </>
    )
  }
}

export default App
