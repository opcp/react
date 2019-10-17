import React from 'react'
import TodoAppAddForm from './TodoAppAddform'
import TodoAppList from './TodoAppList';

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      //{id: number, text: string}
      todos: [
        { id: 1, text: 'buy iphone 11',completed:true }, 
        { id: 2, text: 'learn react',completed:false }
      ]
    }
  }

  handleTodoCompleted = id => {
    const newTodos = [...this.state.todos]

    for(let i = 0 ; i<newTodos.length;i++){
      if(newTodos[i].id === id){
        newTodos[i].completed = !newTodos[i].completed
      }
    }
    this.setState({todos:newTodos})
  }

  handleTextChange = event => {
    // ES2018(ES9) Object Initializer 物件展開運算符
    this.setState({ inputText: event.target.value })
  }

  handleTextKeyPress = event => {
    if(event.target.value && event.key === 'Enter'){
    // 建立新項目
    const newTodo = {
      id: +new Date(),
      text: event.target.value,
      completed:false
    }

    // 加到陣列中
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputText: '',
      nameText: '',
    })
  }
  }
  render() {
    return (
      <>
        <h1>TodoApp</h1>
        <TodoAppAddForm
          value={this.state.inputText}
          onChange={this.handleTextChange}
          onKeyPress={this.handleTextKeyPress}
        />
        <TodoAppList todos={this.state.todos} clickMethod={this.handleTodoCompleted} />
      </>
    )
  }
}

export default TodoApp
