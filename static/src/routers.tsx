import React from 'react'
import path from 'path'
import { setConfig } from 'react-hot-loader'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import routes from '../common/routes'

class Routers extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<nav className="nav">
					<ul>
						{routes.map((route, i) => (
							<li key={i}>
								<Link to={route.path}>{route.title}</Link>
							</li>
						))}
					</ul>
				</nav>
				<Switch>
					{routes.map((route, i) => (
						<Route
							key={i}
							path={route.path}
							component={route.component}
							exact={route.exact}
						/>
					))}
				</Switch>
			</BrowserRouter>
		)
	}
}

setConfig({ reloadHooks: false })

export default Routers
