import Home from '../src/pages/home/home'
import LifeCycle from '../src/pages/lifecycle/lifecycle'
import SimpleTest from '../src/pages/simple-test/loginForm'
import SimpleMemo from '../src/pages/simple-memo/simple-memo'
import ListApi from '../src/pages/list-api/list-api'
import NotFound from '../src/pages/not-found/not-found'

export const routes = [
	{
		path: '/',
		component: Home,
		title: 'Home',
	},
	{
		path: '/lifecycle',
		component: LifeCycle,
		exact: true,
		title: 'Home',
	},
	{
		path: '/simple-test',
		component: SimpleTest,
		exact: true,
		title: 'Test',
	},
	{
		path: '/simple-memo',
		component: SimpleMemo,
		exact: true,
		title: 'Memo',
	},
	{
		path: '/listapi',
		component: ListApi,
		exact: true,
		title: 'ListApi',
	},
	{
		component: NotFound,
	},
]
