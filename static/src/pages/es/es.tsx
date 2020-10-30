import React, { memo, useState, useEffect, Children } from 'react'
import { useIntl } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'
import { string } from 'prop-types'
import Axios from 'axios'

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
	const [isFile, setIsFile] = useState<any>()

	// 数组递归降维
	function arrCat(d: routeInfo[]): any {
		return d.reduce(
			(p: any, c: any) =>
				p.concat(c).concat(c.children ? arrCat(c.children) : []),
			[]
		)
	}

	const uploadFile = () => {
		if (!isFile) {
			return
		}
		const data = new FormData()
		data.append('file', isFile)

		Axios({
			method: 'post',
			url: 'http://localhost:8090/api/uploadFile',
			data,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}

	useEffect(() => {
		setRoutes(arrCat(arrayData))
	}, [])

	return (
		<div className="pages home">
			{/* <pre>{JSON.stringify(routes, null, 4)}</pre> */}
			<input type="file" onChange={(e) => setIsFile(e.target.files[0])} />
			<button onClick={uploadFile}>上传</button>
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
