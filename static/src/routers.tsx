import React from 'react'
import path from 'path'
import { hot, setConfig } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/home/home'
import SimpleMemo from './pages/simple-memo/simple-memo'
import ListApi from './pages/list-api/list-api'
import NotFound from './pages/not-found/not-found'
class Routers extends React.Component {
	render() {
		return (
			<Router>
				<nav className="nav">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/memo">Memo</Link>
						</li>
						<li>
							<Link to="/listapi">ListApi</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/simple-memo" component={SimpleMemo} />
					<Route exact path="/listapi" component={ListApi} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

setConfig({ reloadHooks: false })

export default Routers
