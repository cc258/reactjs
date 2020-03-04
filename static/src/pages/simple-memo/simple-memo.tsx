import React, { memo, useState, useEffect, useContext, useReducer } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

// https://juejin.im/post/5d594ea5518825041301bbcb

export default function SimpleMemo(props: any) {
	const [stars, setStars] = useState(0)
	const [widgetData, setWidgetData] = useState()

	function onStars() {
		setStars(stars + 10)
	}

	function getWidgetData() {
		axios
			.post('http://localhost:8090/api/v1/widget', {
				params: {
					id: 12345,
				},
			})
			.then(res => {
				setWidgetData(res)
			})
	}

	useEffect(() => {
		getWidgetData()
	}, [])

	return (
		<section className="pages">
			<h1 onClick={onStars}>counts {stars} stars</h1>
			<h3>widgetData: {JSON.stringify(widgetData, null, 4)}</h3>
			<MemoChildOne />
			<MemoChildTwo />
		</section>
	)
}

const ChildOne = () => {
	console.log('Child one rendering')
	return <h2>Child One</h2>
}

const ChildTwo = () => {
	console.log('Child two rendering')
	return <h2>Child two</h2>
}

const MemoChildOne = memo(ChildOne)
const MemoChildTwo = memo(ChildTwo)
