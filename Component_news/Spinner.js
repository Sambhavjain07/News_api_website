import React, { Component } from 'react'
import loadingspinner from './loadingspinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loadingspinner} alt="loading" />
      </div>
    )
  }
}

export default Spinner


