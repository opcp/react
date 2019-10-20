import React, { Component } from 'react'
import Service_item from './Service_item'
import axios from 'axios'
import PropTypes from 'prop-types'

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['腳底按摩', '指壓'],
    }
  }

  componentDidMount(){
    axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-8C8C51C2-A1D2-425B-B66D-2139BFD950DE&parameterName=%E5%9F%BA%E9%9A%86%E5%B8%82')
    .then((res)=>{
      console.log(JSON.stringify(res))
    })
    .catch((error)=>{
      console.log(error)
    })
  
  }

  // componentWillMount() {
  //   console.log('componentWillMount 掛載到頁面的時機')
  // }

  // componentDidMount() {
  //   console.log('componentDidMount 掛載完成')
  // }
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   return true
  // }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  render() {
    // console.log('render----掛載中')
    return (
      <>
        <div>
          <input
            value={this.state.inputValue} 
            onChange={this.inputChange}
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.addList}> 增加服務</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {this.state.list.map((item, index) => {
            return (
              <Service_item
                key={index + item}
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
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
}

export default Service
