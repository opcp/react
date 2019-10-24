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
<<<<<<< HEAD
      data: []
=======
      datas: [],
>>>>>>> c0598e6f917d9cf151ab30165b572763f872fd37
    }
  }

  componentDidMount() {
<<<<<<< HEAD
    axios.post('http://localhost:3000/try_promise')
      .then((res) => {
        this.setState({data: res.data.rows})
        console.log(res.data)
        console.log(res.data.rows)
      })
      // .then((results)=>{
      //   this.setState({data:results})
      // })
      .catch((error) => {
        console.log(error)
      })

=======
    axios
      .get('http://localhost:3000/try_promise')
      .then(res => {
        this.setState({ data: res.datas })
        console.log(JSON.stringify(res))
      })
      // .then(results => {
      //   this.setState({ data: results.data })
      // })
      .catch(error => {
        console.log(error)
      })
>>>>>>> c0598e6f917d9cf151ab30165b572763f872fd37
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
<<<<<<< HEAD
        {this.state.data.map(datas => <div>{datas.sid}{datas.name}</div>)}
=======
        <ul>
          {this.state.datas.map(data => (
            <li>{data.name}</li>
          ))}
        </ul>
>>>>>>> c0598e6f917d9cf151ab30165b572763f872fd37
      </>
    )
  }
}

export default Service
