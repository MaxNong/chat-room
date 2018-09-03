import React from 'react'
import '@/components/containers/index.scss'
import {Icon} from 'icon'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="headerBar">
			微信
			</div>
		)
	}
}

class Footer extends React.Component {
  render () {
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
      </div>
    )
  }
}

class Container extends React.Component {
  let 
  render () {
    return (
    <div>
      <Header></Header>
      <div className="containerBox">
      {this.props.children}
      </div>
      <Footer></Footer>
    </div>
    )
  }
}

export {Header, Footer, Container}