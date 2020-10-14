import React, { memo, useState, useEffect } from 'react'
// import { useIntl } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'

export interface HomeProps {
	hello?: string
}

const Home: React.FC<HomeProps> = () => {
	const dispatch = useDispatch()
	const props = useSelector((state: any) => state.home)
	// const { formatMessage: f } = useIntl()

	return (
		<div className="pages home" test-id="home" id="home">
			{/* <h1>{f({ id: 'qqqqqqqqqqqqqqqqqqqqqq' })}123</h1> */}
			<h1>In the end, </h1>
			<h2>everything will have a happy ending. </h2>
			<h3>If it's not happy, </h3>
			<h4>then it's not the end.</h4>
		</div>
	)
}

export default memo(Home)
