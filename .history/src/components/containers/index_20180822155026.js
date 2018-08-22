import React from 'react'
import '@/components/containers/index.scss'
import {Icon} from 'icon'

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
          <li>
            <Icon href='icon-ico_message' size='20'></Icon>
            <p>微信</p>
          </li>
          <li>
            <Icon href='icon-ico_addressBook' size='20'></Icon>
            <p>通讯录</p>
          </li>
          <li>
            <Icon href='icon-ico_wait' size='20'></Icon>
            <p>发现</p>
          </li>
          <li>
            <Icon href='icon-ico_wait' size='20'></Icon>
            <p>我</p>
          </li>
        </ul>
      </div>
    )
  }
}

export {Header, Footer}