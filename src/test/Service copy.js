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
      data:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/try_promise')
    .then((res)=>{
      console.log(JSON.stringify(res))
    })
    .then((results)=>{
      this.setState({data:results})
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
    const { data } = this.state
    // console.log('render----掛載中')
    return (
      <>
        {/* {data.map(datas=><div>{datas.sid}</div>)} */}
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
