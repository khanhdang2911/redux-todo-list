/** @format */
// import { v4 as uuidv4 } from 'uuid'
// const initState = [
// 	{ id: uuidv4(), name: 'Learn React', priority: 'High', completed: false },
// 	{ id: uuidv4(), name: 'Learn Redux', priority: 'Medium', completed: true },
// 	{ id: uuidv4(), name: 'Learn JavaScript', priority: 'Low', completed: false },
// ]
// const todoListSlice = (state = initState, action) => {
// 	switch (action.type) {
// 		case 'todoList/addToDo':
// 			return [...state, action.payload]

// 		case 'todoList/checkedTodoCompleted':
// 			return state.map((todo) => {
// 				return todo.id === action.payload
// 					? {
// 							...todo,
// 							completed: !todo.completed,
// 					  }
// 					: todo
// 			})
// 		default:
// 			return state
// 	}
// }

// export default todoListSlice
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const todoListSlice = createSlice({
	name: 'todoList',
	initialState: [
		{ id: uuidv4(), name: 'Learn React', priority: 'High', completed: false },
		{ id: uuidv4(), name: 'Learn Redux', priority: 'Medium', completed: true },
		{ id: uuidv4(), name: 'Learn JavaScript', priority: 'Low', completed: false },
	],
	reducers: {
		addToDo: (state, action) => {
			state.push(action.payload)
		},
		checkedTodoCompleted: (state, action) => {
			const todo = state.find((todo) => todo.id === action.payload)
			if (todo) {
				todo.completed = !todo.completed
			}
		},
	},
})

export default todoListSlice
