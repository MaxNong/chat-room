import React from 'react'
import '@/components/cssModules/icons.scss'

class Icon extends React.Component {
  constructor () {
    super()
  }
  render () {
    let styleStr = {
      width: this.props.size,
      height: this.props.size,
      fill: this.props.fill

    }
    return (
      <svg className="icon" style={width: `${this.props.size}`} aria-hidden="true">
		    <use xlinkHref={`#${this.props.href}`}></use>
	    </svg>	
    )
  }
}
 export {Icon}