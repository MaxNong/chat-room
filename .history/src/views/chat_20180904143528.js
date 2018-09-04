import React from 'react'
import { FlowHeader } from 'containers'
import '@'

class Chat extends React.Component {
  constructor  (props) {
    super(props)
  }
  render () {
    console.log(this.props.location.state.value)
    return (
      <div>
        <FlowHeader title={this.props.location.state.value.title}></FlowHeader>
        <div className="chatBox">
          <input type="text"/>
        </div>
      </div>
    )
  }
}

export default Chat