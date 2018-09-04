import React from 'react'
import { FlowHeader } from 'containers'

class Chat extends React.Component {
  contructor  (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <FlowHeader title={this.props.}></FlowHeader>
      </div>
    )
  }
}

export default Chat