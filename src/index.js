import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routerConfig from 'routerConfig'
import '@/assets/sass/base.scss'
import './lib/iconfont.js'


ReactDOM.render(<Router><Switch>{routerConfig}</Switch></Router>, document.getElementById('root'))

