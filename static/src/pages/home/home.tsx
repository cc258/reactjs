import React, { memo, useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'

export interface HomeProps {
	hello?: string
}

const TestComp: React.FC<HomeProps> = () => {
	useEffect(() => {
		console.log('Mount TestComp');
		return () => {
			console.log('Unmount TestComp');
		}
	}, [])
	return (<div>Test</div>)
}

const Home: React.FC<HomeProps> = () => {
	// const dispatch = useDispatch()
	// const props = useSelector((state: any) => state.home)
	const { formatMessage: FM } = useIntl()
	const [text, setText] = useState('');

	const changeText= (e:any) => {
		const val = decodeURIComponent(e.target.value);
		console.log(val)
		setText(val);
	}

	useEffect(() => {
		console.log('Mount Home');
		return () => {
			console.log('Unmount Home');
		}
	}, [])

	const aaa = '';
	const bbb = '0';
	const ccc = 0;
	const ddd = 1;
	const eee = false;
	const fff = true;

	return (
		<div className="pages home" role="home" id="home" onClick={()=>{console.log("home")}}>
			<h1 onClick={()=>{console.log("h1")}}>{FM({ id: 'hello' })}</h1>
			<h1>In the end, abc 123321</h1>
			<h2>everything will have a happy ending. </h2>
			<h3>If it's not happy, </h3>
			<h4>then it's not the end.</h4>
			{!!ccc && <h5>{aaa}{bbb}{ccc}{ddd}{eee}{fff}</h5>}
			<h3>text: {text}</h3>
			<TestComp />
			<textarea value={text} cols={20} wrap="hard" onChange={changeText} />

			
		</div>
	)
}

export default memo(Home)
