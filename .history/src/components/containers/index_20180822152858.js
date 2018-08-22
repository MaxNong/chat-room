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
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
    )
  }
}

export {Header}