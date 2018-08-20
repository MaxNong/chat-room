
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import router from 'router'

class Header extends Component {
  render () {
    return (
      <div>
        <h1>React 小书</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)
