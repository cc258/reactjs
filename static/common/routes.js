import React, { lazy } from 'react'

const Home = lazy(() => import('../src/pages/home/home'))
const LifeCycle = lazy(() => import('../src/pages/lifecycle/lifecycle'))
const SimpleTest = lazy(() => import('../src/pages/simple-test/simple-test'))
const SimpleMemo = lazy(() => import('../src/pages/simple-memo/simple-memo'))
const ListApi = lazy(() => import('../src/pages/list-api/list-api'))
const NotFound = lazy(() => import('../src/pages/not-found/not-found'))

const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
		title: 'Home',
	},
	{
		path: '/lifecycle',
		component: LifeCycle,
		exact: true,
		title: 'Life',
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

export default routes
