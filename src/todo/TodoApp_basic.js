import React from 'react'

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      text: {
        inputText: '',
        nameText: '',
      },
      //{id: number, text: string}
      todos: [{ id: 1, text: 'buy iphone 11' }, { id: 2, text: 'learn react' }],
    }
  }

  handleTextChange = event => {
    // ES2018(ES9) Object Initializer 物件展開運算符
    this.setState({
      text: {
        [event.target.name]: event.target.value,
      },
    })
  }

  handleTextKeyPress = event => {
    // 建立新項目
    const newTodo = {
      id: +new Date(),
      text: this.state.text.nameText + ':' + this.state.text.inputText,
    }

    // 加到陣列中
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputText: '',
      nameText: '',
    })
  }

  render() {
    return (
      <>
        <h1>TodoApp</h1>
        name:
        <input
          type="text"
          value={this.state.text.nameText}
          onChange={this.handleTextChange}
          name="nameText"
        />
        <br />
        do:
        <input
          type="text"
          value={this.state.text.inputText}
          onChange={this.handleTextChange}
          name="inputText"
        />
        <br />
        <button onClick={this.handleTextKeyPress}> add </button>
        <ul>
          {this.state.todos.map((value, index) => {
            return <li key={value.id}>{value.text}</li>
          })}
        </ul>
      </>
    )
  }
}

export default TodoApp
