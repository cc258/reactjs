import React, { FC, memo, useState, useEffect, CSSProperties } from 'react'
import { DndProvider, useDrag, useDrop, DragSource, DropTarget } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Drag: FC<DragProps> = () => {
	const [text, setText] = useState('');

	return (
		<DndProvider backend={HTML5Backend}>
			<Container />
		</DndProvider>
	)


}

export const Container: FC = memo(function Container() {
	return (
		<div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				<Dustbin />
			</div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				<Box name="Glass" />
				<Box name="Banana" />
				<Box name="Paper" />
			</div>
		</div>
	)
})

const style: CSSProperties = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

export const Dustbin: FC = () => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: "box",
		drop: () => ({ name: 'Dustbin' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}))

	const isActive = canDrop && isOver
	let backgroundColor = '#222'
	if (isActive) {
		backgroundColor = 'darkgreen'
	} else if (canDrop) {
		backgroundColor = 'darkkhaki'
	}

	return (
		<div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
			{isActive ? 'Release to drop' : 'Drag a box here'}
		</div>
	)
}

const boxStyle: CSSProperties = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}

export interface BoxProps {
	name: string
}

interface DropResult {
	name: string
}

export const Box: FC<BoxProps> = function Box({ name }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "box",
		item: { name },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult<DropResult>()
			if (item && dropResult) {
				alert(`You dropped ${item.name} into ${dropResult.name}!`)
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}))

	const opacity = isDragging ? 0.4 : 1
	return (
		<div
			ref={drag}
			role="Box"
			style={{ ...boxStyle, opacity }}
			data-testid={`box-${name}`}
		>
			{name}
		</div>
	)
}

export default memo(Drag)


