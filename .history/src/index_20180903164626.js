import React from 'react'
import './index.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routerConfig from 'routerConfig'
import ReactDOM from 'react-dom'
import '@/base.scss'
import './lib/iconfont.js'


ReactDOM.render(<BrowserRouter><Router><Switch>{routerConfig}</Switch></Router></BrowserRouter>, document.getElementById('root'))

