import React from 'react'

interface SimpleTestProps {
	children: any
}

// NOTE: React Testing Library works with React Hooks _and_ classes just as well
// and your tests will be the same however you write your components.
function SimpleTest(props: SimpleTestProps) {
	const [showMessage, setShowMessage] = React.useState(false)
	return (
		<div className="pages">
			<label htmlFor="toggle">Show Message</label>
			<input
				id="toggle"
				type="checkbox"
				onChange={e => setShowMessage(e.target.checked)}
				checked={showMessage}
			/>
			{showMessage ? props.children : null}
		</div>
	)
}

export default SimpleTest
