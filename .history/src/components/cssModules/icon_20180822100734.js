import React from 'react'

class Icon extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <svg className="icon" aria-hidden="true">
		    <use xlink:href={this.props.}></use>
	    </svg>	
    )
  }
}