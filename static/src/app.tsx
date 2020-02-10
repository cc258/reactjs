import React, { Suspense } from 'react'
import { hot } from 'react-hot-loader'

// international language
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from '../lang/en'

import Routers from './routers'

import './assets/app.scss'

const store = {}
class App extends React.Component {
	render() {
		return (
			<Suspense fallback={<div />}>
				<Routers />
			</Suspense>
		)
	}
}
export default hot(module)(App)
