import index from '../views/index'
const routerConf = [
	{
		path: '/',
		component: index
		//   indexRoute: { component: index },
		//   childRoutes: [
		//     { path: 'about', component: index },
		//     { path: 'inbox',
		//       component: index,
		//       childRoutes: [
		//         { path: '/messages/:id', component: index }
		//         // { path: 'messages/:id',
		//         //   onEnter: function (nextState, replaceState) {
		//         //     replaceState(null, '/messages/' + nextState.params.id)
		//         //   }
		//         // }
		//       ]
		//     }
		//   ]
	},
	{
		path: '*',
		redirect: '/'
	}
]

export default routerConf