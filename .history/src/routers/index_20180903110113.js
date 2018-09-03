import React from 'react'
import { Route } from 'react-router-dom'
import index from '../views/index'
import me from '../views/me'
import contact from '../views/contact'
const routerConf = [
	(<Route key="indexPage" exact path="/" component={index}/>),
  (<Route key="mePage" exact path="/me" component={me}/>),
  (<Route key="contactPage" exact path="/contact" component={contact}/>),
  (<Route key="contactPage" exact path="/contact" component={contact}/>)
]

export default routerConf