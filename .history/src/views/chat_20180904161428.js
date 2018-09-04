import React from 'react'
import { FlowHeader } from 'containers'
import '@/views/chat.scss'

class Chat extends React.Component {
  constructor  (props) {
    super(props)
    this.state = {
      message: ''
    }
  }
  sendMessage () {
    console.log(1111)
    window.socket.emit('chat message', 'hahahahhaha');
  }
  render () {
    return (
      <div>
        <FlowHeader title={this.props.location.state.value.title}></FlowHeader>
        <div className="chatBox">
          <input type="text" value/>
          <button onClick={this.sendMessage}>发送</button>
        </div>
      </div>
    )
  }
}

export default Chat