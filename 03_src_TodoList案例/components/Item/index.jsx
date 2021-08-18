import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false // 标识鼠标移入、移出
  }

  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  // 鼠标移入、移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }

  // 勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 删除一个todo的回调
  handleDelete = (id) => {
    return () => {
      // 要写window
      if (window.confirm('确定删除吗？')) {
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
          onClick={this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    )
  }
}
