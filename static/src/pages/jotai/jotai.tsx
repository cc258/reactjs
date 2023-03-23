import React, { memo, useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'

export interface JotaiProps {
	hello?: string
}

const Jotai: React.FC<JotaiProps> = () => {
	// const dispatch = useDispatch()
	// const props = useSelector((state: any) => state.Jotai)
	const { formatMessage: f } = useIntl()
	const [text, setText] = useState('');

	const changeText= (e:any) => {
		const val = decodeURIComponent(e.target.value);
		console.log(val)
		setText(val);
	}

	return (
		<div className="pages jotai" role="jotai" id="jotai" onClick={()=>{console.log("jotai")}}>
			<h1 onClick={()=>{console.log("h1")}}>{f({ id: 'hello' })}</h1>
			<h1>In the end, abc 123321</h1>
			<h2>everything will have a happy ending. </h2>
			<h3>If it's not happy, </h3>
			<h4>then it's not the end.</h4>
			<h3>{text}</h3>
			<textarea value={text} cols={20} wrap="hard" onChange={changeText} />
		</div>
	)


}

export default memo(Jotai)
