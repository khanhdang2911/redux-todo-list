/** @format */

import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from '../../redux/action'
import { todoRemaningSelector } from '../../redux/selectors'
export default function TodoList() {
	const [todoName, setTodoName] = useState('')
	const [priority, setPriority] = useState('Medium')
	const todoList = useSelector(todoRemaningSelector)
	const dispatch = useDispatch()
	const handleChangToDoName = (e) => {
		setTodoName(e.target.value)
	}
	const handleOnChangePriority = (value) => {
		setPriority(value)
	}
	const handleAddTodo = () => {
		dispatch(addToDo({ name: todoName, priority: priority, completed: false }))
	}
	return (
		<Row style={{ height: 'calc(100% - 40px)' }}>
			<Col
				span={24}
				style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}
			>
				{todoList.map((todo, index) => {
					return (
						<Todo
							key={index}
							id={todo.id}
							name={todo.name}
							prioriry={todo.priority}
							checkedCompleted={todo.completed}
						/>
					)
				})}
			</Col>
			<Col span={24}>
				<Input.Group
					style={{ display: 'flex' }}
					value={todoName}
					compact
				>
					<Input onChange={(e) => handleChangToDoName(e)} />
					<Select
						defaultValue='Medium'
						onChange={(e) => handleOnChangePriority(e)}
					>
						<Select.Option
							value='High'
							label='High'
						>
							<Tag color='red'>High</Tag>
						</Select.Option>
						<Select.Option
							value='Medium'
							label='Medium'
						>
							<Tag color='blue'>Medium</Tag>
						</Select.Option>
						<Select.Option
							value='Low'
							label='Low'
						>
							<Tag color='gray'>Low</Tag>
						</Select.Option>
					</Select>
					<Button
						type='primary'
						onClick={handleAddTodo}
					>
						Add
					</Button>
				</Input.Group>
			</Col>
		</Row>
	)
}
