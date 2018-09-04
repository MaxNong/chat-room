import React from 'react'
import { FlowHeader } from 'containers'

class Chat extends React.Component {
  contructor  (props) {
    super(props)
  }
  render () {
    console.log(this.props.location.state.value)
    return (
      <div>
        <FlowHeader title={this.props.location.state.value}></FlowHeader>
      </div>
    )
  }
}

export default Chat