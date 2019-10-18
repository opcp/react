import React, { Component } from 'react'
import PropTypes from 'prop-types'



export class Service_item extends Component {
  render() {
    return (
      <>
        <li onClick={this.handleClick}>
          {this.props.content}
        </li>
      </>
    )
  }
  handleClick=()=>{
      this.props.deleteItem(this.props.index)
  }
}

Service_item.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

export default Service_item
