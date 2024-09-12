/** @format */

import { Row, Tag, Checkbox } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkedTodoCompleted } from '../../redux/action'
const priorityColorMapping = {
	High: 'red',
	Medium: 'blue',
	Low: 'gray',
}

export default function Todo({ name, prioriry, id, checkedCompleted }) {
	const [checked, setChecked] = useState(checkedCompleted)
	const dispatch = useDispatch()
	const toggleCheckbox = () => {
		setChecked(!checked)
		dispatch(checkedTodoCompleted(id))
	}

	return (
		<Row
			justify='space-between'
			style={{
				marginBottom: 3,
				...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
			}}
		>
			<Checkbox
				checked={checked}
				onChange={toggleCheckbox}
			>
				{name}
			</Checkbox>
			<Tag
				color={priorityColorMapping[prioriry]}
				style={{ margin: 0 }}
			>
				{prioriry}
			</Tag>
		</Row>
	)
}
