import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = () => {
    axios.get('').then(
      (res) => {
        console.log('成功了', res)
      },
      (err) => {
        console.log('失败了', err)
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}></button>
      </div>
    )
  }
}
