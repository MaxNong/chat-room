
import React from 'react'
// import ReactDOM from 'react-dom'
import './index.css'
import routerConfig from 'routerConfig'
import { RouterBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'


ReactDOM.render(<Router history={BrowserRouter} routes={routerConfig} />, document.getElementById('root'))

// class Header extends Component {
//   render () {
//     return (
//       <div>
//         <h1>React 小书</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Header />,
//   document.getElementById('root')
// )
