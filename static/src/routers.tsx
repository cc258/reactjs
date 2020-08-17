import React from 'react'
import path from 'path'
import { hot, setConfig } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { routes } from '../common/routes'

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
							<Link to="/lifecycle">Lifecycle</Link>
						</li>
						<li>
							<Link to="/simple-memo">simple memo</Link>
						</li>
						<li>
							<Link to="/simple-test">simple test</Link>
						</li>
						<li>
							<Link to="/listapi">ListApi</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					{routes.map((route: any, i) => {
						return (
							<Route
								key={i}
								path={route.path}
								exact={route.exact}
								component={route.component}
								routes={routes}
							/>
						)
					})}
				</Switch>
			</Router>
		)
	}
}

setConfig({ reloadHooks: false })

export default Routers
