import React from 'react'
import '@/components/cssModules/icons.scss'

class Icon extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <svg className="icon" style={width: `$`} aria-hidden="true">
		    <use xlinkHref={`#${this.props.href}`}></use>
	    </svg>	
    )
  }
}
 export {Icon}