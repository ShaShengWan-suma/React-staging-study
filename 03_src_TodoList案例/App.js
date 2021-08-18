import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: false }
    ]
  }

  // 用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const { todos } = this.state
    // 追加一个todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  // 更新todo的状态
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done }
      } else {
        return todoObj
      }
    })
    this.setState({
      todos: newTodos
    })
  }

  // 删除一个todo
  deleteTodo = (id) => {
    // 获取todos
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => todoObj.id !== id)
    this.setState({
      todos: newTodos
    })
  }

  // 全选
  checkAllTodos = (done) => {
    // 获取原来的todos
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done }
    })
    this.setState({
      todos: newTodos
    })
  }

  // 清除所有已完成todo
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => !todoObj.done)
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodos={this.checkAllTodos}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    )
  }
}
