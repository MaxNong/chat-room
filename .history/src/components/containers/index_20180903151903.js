import React from 'react'
import '@/components/containers/index.scss'
import { Icon } from 'icon'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="headerBar">
        {this.props.title}
      </div>
    )
  }
}

class Footer extends React.Component {
  goRouter (url, title) {
    this.props.history.push(url)
  }
  render() {
    return (
      <div className="footerBar">
        <ul>
          <li onClick={() => {
            this.props.changeTitleClick('微信')
          }}>
            <Link to="/" >
              <Icon href='icon-ico_message' size='20'></Icon>
              <p>微信</p>
            </Link>
          </li>

          <li onClick={() => {
            this.props.changeTitleClick('通讯录')
          }}>
            <Link to="/contact">
              <Icon href='icon-ico_addressBook' size='20'></Icon>
              <p>通讯录</p>
            </Link>
          </li>

          <Link to="/moments">
            <li>
              <Icon href='icon-ico_range' size='20'></Icon>
              <p>发现</p>
            </li>
          </Link>
          <Link to="/me">
            <li>
              <Icon href='icon-ico_recipien' size='20'></Icon>
              <p>我</p>
            </li>
          </Link>
        </ul>
      </div >
    )
  }
}

class Container extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '微信'
    }
  }
  changeTitle(title) {
    this.setState({
      title: title
    })
  }
  render() {
    let screenHeight = window.innerHeight
    let style = {
      height: `${screenHeight - 40 - 60}px`
    }
    return (
      <div>
        <Header title={this.state.title}></Header>
        <div className="containerBox" style={style}>
          {this.props.children}
        </div>
        <Footer changeTitleClick={this.changeTitle.bind(this)}></Footer>
      </div>
    )
  }
}

export { Header, Footer, Container }