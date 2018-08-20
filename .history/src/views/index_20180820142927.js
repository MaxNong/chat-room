import react from 'react'
class Header extends Component {
    render () {
      return (
        <div>
          <h1>React 小书</h1>
        </div>
      )
    }
  }

  ReactDOM.render(
      <Header />,
      document.getElementById('root')
    )