import React, { Component } from 'react'
import Service_item from './Service_item'
import PropTypes from 'prop-types'

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['腳底按摩', '指壓'],
    }
  }

  componentWillMount(){
        console.log('componentWillMount 掛載到頁面的時機')
  }

  componentDidMount(){
      console.log('componentDidMount 掛載完成')
  }

  render() {
      console.log('render----掛載中')
    return (
      <>
        <div>
          <input 
          value={this.state.inputValue} 
          onChange={this.inputChange} 
          ref={(input)=>{this.input=input}}
          />
          <button onClick={this.addList}> 增加服務</button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          {this.state.list.map((item, index) => {
            return (
                <Service_item 
                key={index+item}
                list={this.state.list} 
                content={item}
                index={index}
                deleteItem={this.deleteItem}
                />
                )
          })}
        </ul>
      </>
    )
  }
  deleteItem = (index) => {
    console.log(index)
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list,
    })
  }

  inputChange = e => {
    this.setState({
      inputValue: this.input.value
    })
  }

  addList = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    },()=>{
        console.log(this.ul.querySelectorAll('li').length)
    })
  }
}

export default Service
