import React, { Component } from 'react'
import loding from "./loading.gif"

export default class spinnerr extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loding} style={{marginTop:"20vh"}}alt="loading" />
      </div>
    )
  }
}
