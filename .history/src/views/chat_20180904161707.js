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
    window.socket.emit('chat message', this.state.message);
  }
  handleChange () {}
  render () {
    return (
      <div>
        <FlowHeader title={this.props.location.state.value.title}></FlowHeader>
        <div className="chatBox">
          <input onChange={this.handleChange} type="text" value={this.state.message}/>
          <button onClick={this.sendMessage}>发送</button>
        </div>
      </div>
    )
  }
}

export default Chat