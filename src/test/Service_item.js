import React, { Component } from 'react'
import PropTypes from 'prop-types'



export class Service_item extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('render again')
    return (
      <>
        <li onClick={this.handleClick}>
          {this.props.content}
        </li>
      </>
    )
  }
  handleClick = () => {
    this.props.deleteItem(this.props.index)
  }
  
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps')
  // }

  // componentWillUnmount(){
  //   console.log('componentWillUnmount')
  // }
}

Service_item.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

export default Service_item


