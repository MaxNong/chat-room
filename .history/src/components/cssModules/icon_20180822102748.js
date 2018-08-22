import React from 'react'
import ''

class Icon extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <svg className="icon" aria-hidden="true">
		    <use xlinkHref={this.props.href}></use>
	    </svg>	
    )
  }
}
 export {Icon}