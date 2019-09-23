// import React from 'react'
import React, { Component } from 'react';

// const handleClick = () => {
//   this.props.addFourSushis()
//   this.props.updateIndex()
// }

class MoreButton extends Component{

  handleClick = () => {
    this.props.addFourSushis()
    this.props.updateIndex()
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
      >More sushi!</button>
    )
  }
}

export default MoreButton
