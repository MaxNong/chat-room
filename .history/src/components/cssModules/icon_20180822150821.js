import React from 'react'
import '@/components/cssModules/icons.scss'

class Icon extends React.Component {
  constructor () {
    super()
  }
  render () {
    let href 
    return (
      <svg className="icon" aria-hidden="true">
		    <use xlinkHref={this.props.href}></use>
	    </svg>	
    )
  }
}
 export {Icon}