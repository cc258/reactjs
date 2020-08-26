import React, { memo, useState, useEffect, Children } from 'react'
import { useIntl } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'
import { string } from 'prop-types'

interface routeInfo {
	title: string | number
	path: string | number
	children?: any
}

interface EsProps {}

const Es: React.FC<EsProps> = () => {
	const dispatch = useDispatch()
	const props = useSelector((state: any) => state.home)
	const { formatMessage: f } = useIntl()

	const [routes, setRoutes] = useState<any>([])

	// 数组递归降维
	function arrCat(d: routeInfo[]): any {
		return d.reduce(
			(p: any, c: any) =>
				p.concat(c).concat(c.children ? arrCat(c.children) : []),
			[]
		)
	}

	useEffect(() => {
		setRoutes(arrCat(arrayData))
	}, [])

	return (
		<div className="pages home" id="home">
			<h1>{f({ id: 'qqqqqqqqqqqqqqqqqqqqqq' })}123</h1>
			<h1>
				<pre>{JSON.stringify(routes, null, 4)}</pre>
			</h1>
			<h1>In the end, </h1>
			<h2>everything will have a happy ending. </h2>
			<h3>If it's not happy, </h3>
			<h4>then it's not the end.</h4>
		</div>
	)
}

const arrayData = [
	{
		path: 1,
		title: 1,
		children: [
			{
				path: 2,
				title: 2,
			},
			{
				path: 3,
				title: 3,
			},
		],
	},
	{
		path: 4,
		title: 4,
		children: [
			{
				path: 5,
				title: 5,
			},
			{
				path: 6,
				title: 6,
			},
		],
	},
]

export default memo(Es)
