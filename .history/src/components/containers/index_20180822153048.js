import React from 'react'
import '@/components/containers/index.scss'

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
      <div>
        <ul>
          <li>
            <Icon href='icon-ico_wait' size='20'></Icon>
            <p>微信</p>
          </li>
          <li>
            <Icon href='icon-ico_wait' size='20'></Icon>
            <p>微信</p>
          </li>
          <li>
            <Icon href='icon-ico_wait' size='20'></Icon>
            <p>微信</p>
          </li>
          <li>
            <Icon href='icon-ico_wait' size='20'></Icon>
            <p>微信</p>
          </li>
        </ul>
      </div>
    )
  }
}

export {Header}