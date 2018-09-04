import React from 'react'
import '@/components/containers/index.scss'
import { Icon } from 'icon'
import { Link, withRouter } from 'react-router-dom'

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
  render() {
    return (
      <div className="footerBar">
        <ul>
          <Link to="/">
            <li>
              <Icon href='icon-ico_message' size='20'></Icon>
              <p>微信</p>
            </li>
          </Link>

          <Link to="/contact">
            <li>
              <Icon href='icon-ico_addressBook' size='20'></Icon>
              <p>通讯录</p>
            </li>
          </Link>

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
//相当于高阶函数包装
Footer = withRouter(Footer)

class Container extends React.Component {
  render() {
    let screenHeight = window.innerHeight
    let style = {
      height: `${screenHeight - 40 - 60}px`
    }
    return (
      <div>
        <Header title={this.props.title}></Header>
        <div className="containerBox" style={style}>
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

//内部公共头部
class FlowHeader extends React.Component

export { Header, Footer, Container }