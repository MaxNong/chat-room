import React from 'react'
import './index.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routerConfig from 'routerConfig'
import ReactDOM from 'react-dom'
import '@/base.scss'
import './lib/iconfont'


ReactDOM.render(<Router><Switch>{routerConfig}</Switch></Router>, document.getElementById('root'))

