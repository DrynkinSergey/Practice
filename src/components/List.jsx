import React, { Component } from 'react'
import Form from './Form'

export  class List extends Component {

  render() {
    return (
      <div style={{display:'flex', flexDirection: 'column'}}>List
      <Form onSubmit={this.props.onSubmit}/>
      </div>
    )
  }
}
