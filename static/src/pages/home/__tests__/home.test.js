import React from 'react'
import {
	render,
	fireEvent,
	waitForElement,
	cleanup,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { IntlProvider } from 'react-intl'
import Home from '../home'

afterEach(cleanup)

describe('<Home />', () => {
	test('should display a blank login form, with remember me checked by default', async () => {
		const { findByTestId, container } = render(
			<IntlProvider locale="en">
				<Home />
			</IntlProvider>
		)
		const home = await findByTestId('home')

		expect(container).toMatchSnapshot()
		expect(home).toBeInTheDocument()
		// expect(findByTestId('home')).toHaveTextContent('hello');
	})
})
