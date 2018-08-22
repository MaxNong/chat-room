import React from 'react'

class Icon extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <svg class="icon" aria-hidden="true">
		    <use xlink:href="#icon-left"></use>
	    </svg>	
    )
  }
}