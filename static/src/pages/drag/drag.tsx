import React, { memo, useState, useEffect } from 'react'

export interface DragProps {
	hello?: string
}

const Drag: React.FC<DragProps> = () => {
	const { formatMessage: f } = useIntl()
	const [text, setText] = useState('');

	const changeText= (e:any) => {
		const val = decodeURIComponent(e.target.value);
		console.log(val)
		setText(val);
	}

	return (
		<div className="pages Drag">
			<h1 onClick={()=>{console.log("hello")}}>{f({ id: 'hello' })}</h1>
		</div>
	)


}

export default memo(Drag)
