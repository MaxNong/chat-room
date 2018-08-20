import index from '../views/index'
const routerConf = [
    { path: '/',
      component: index,
      childRoutes: [
        { path: 'about', component: index },
        { path: 'inbox',
          component: index,
          childRoutes: [
            { path: '/messages/:id', component: Message },
            { path: 'messages/:id',
              onEnter: function (nextState, replaceState) {
                replaceState(null, '/messages/' + nextState.params.id)
              }
            }
          ]
        }
      ]
    }
  ]

  export default routerConf