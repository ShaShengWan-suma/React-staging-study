import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  static propType = {
    checkAllTodos: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired
  }

  // 全选按钮
  handleCheckAll = (event) => {
    const { target } = event
    this.props.checkAllTodos(target.checked)
  }

  // 清除所有已完成
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    // 已完成的个数
    const doneCount = todos.reduce((prev, todo) => {
      if (todo.done) {
        prev += 1
      }
      return prev
    }, 0)
    // 总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          {/* defaultChecked只在第一次生效 */}
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    )
  }
}
