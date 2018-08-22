import React from 'react'

class Icon extends React.Component {
  constructor () {}
  render () {
    return (
      <svg class="icon" aria-hidden="true">
		    <use xlink:href="#icon-left"></use>
	    </svg>	
    )
  }
}