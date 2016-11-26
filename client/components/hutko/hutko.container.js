import React, { Component } from 'react'

class HutkoContainer extends Component {
  render() {
    console.log('loading hutko side');
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default HutkoContainer
