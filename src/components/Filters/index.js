/** @format */

import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterSearchChange, filterStatusChange, filterPriotityChange } from '../../redux/action'
const { Search } = Input

export default function Filters() {
	const [searchValue, setSearchValue] = useState('')
	const [status, setStatus] = useState('All')
	const [priotrities, setPriotrities] = useState([])
	const dispatch = useDispatch()
	const handleChangeFilterSearch = (e) => {
		const value = e.target.value
		setSearchValue(value)
		dispatch(filterSearchChange(value))
	}
	const handleChangeStatus = (e) => {
		const value = e.target.value
		setStatus(value)
		dispatch(filterStatusChange(value))
	}
	const handleChangPriority = (value) => {
		setPriotrities(value)
		dispatch(filterPriotityChange(value))
	}

	return (
		<Row justify='center'>
			<Col span={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>Search</Typography.Paragraph>
				<Search
					placeholder='input search text'
					value={searchValue}
					onChange={(e) => handleChangeFilterSearch(e)}
				/>
			</Col>
			<Col sm={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>Filter By Status</Typography.Paragraph>
				<Radio.Group
					onChange={(e) => handleChangeStatus(e)}
					value={status}
				>
					<Radio value='All'>All</Radio>
					<Radio value='Completed'>Completed</Radio>
					<Radio value='Todo'>To do</Radio>
				</Radio.Group>
			</Col>
			<Col sm={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>Filter By Priority</Typography.Paragraph>
				<Select
					mode='multiple'
					allowClear
					placeholder='Please select'
					style={{ width: '100%' }}
					value={priotrities}
					onChange={(value) => handleChangPriority(value)}
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
			</Col>
		</Row>
	)
}
