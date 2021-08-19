import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 获取用户的输入
    const {
      keyWordElement: { value: keyWord }
    } = this
    // 发送请求前通知App更新状态
    this.props.updateAppState({
      users: [],
      isFirst: false,
      isLoading: true
    })
    // 发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      (res) => {
        console.log(res)
        // 请求成功后通知App更新状态
        this.props.updateAppState({
          users: res.data.items,
          isLoading: false
        })
      },
      (err) => {
        // 请求失败后通知App更新状态
        this.props.updateAppState({
          isLoading: false,
          err: err.message
        })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            type="text"
            placeholder="输入关键词点击搜索"
            ref={(c) => (this.keyWordElement = c)}
          />
          &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
