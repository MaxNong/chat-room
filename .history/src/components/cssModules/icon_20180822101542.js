import React from 'react'

class Icon extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <svg className="icon" ariaHidden="true">
		    <use xlinkHref={this.props.href}></use>
	    </svg>	
    )
  }
}
 export {Icon}