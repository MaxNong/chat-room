
import React from 'react'
// import ReactDOM from 'react-dom'
import './index.css'
import routerConfig from 'routerConfig'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'


ReactDOM.render(<Router routes={routerConfig} />, document.getElementById('root'))
