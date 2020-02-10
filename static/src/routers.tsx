import React from 'react'
import path from 'path'
import { hot, setConfig } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/home/home'
import Memo from './pages/memo/memo'
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
					</ul>
				</nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/memo" component={Memo} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

setConfig({ reloadHooks: false })

export default Routers
