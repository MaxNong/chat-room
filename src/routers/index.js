import React from 'react'
import { Route } from 'react-router-dom'
import index from '../views/index'
import about from '../views/about'
const routerConf = [
	(<Route key="indexPage" exact path="/" component={index}/>),
	(<Route key="aboutPage" exact path="/about" component={about}/>)
]

export default routerConf