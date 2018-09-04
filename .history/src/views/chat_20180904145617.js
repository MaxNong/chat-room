import React from 'react'
import { FlowHeader } from 'containers'
import '@/views/chat.scss'

class Chat extends React.Component {
  constructor  (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <FlowHeader title={this.props.location.state.value.title}></FlowHeader>
        {/* <div className="chatBox"> */}
          <input className="chatBox" type="text"/>
        {/* </div> */}
      </div>
    )
  }
}

export default Chat