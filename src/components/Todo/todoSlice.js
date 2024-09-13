/** @format */
import { v4 as uuidv4 } from 'uuid'
const initState = [
	{ id: uuidv4(), name: 'Learn React', priority: 'High', completed: false },
	{ id: uuidv4(), name: 'Learn Redux', priority: 'Medium', completed: true },
	{ id: uuidv4(), name: 'Learn JavaScript', priority: 'Low', completed: false },
]
const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case 'todoList/addToDo':
			return [...state, action.payload]

		case 'todoList/checkedTodoCompleted':
			return state.map((todo) => {
				return todo.id === action.payload
					? {
							...todo,
							completed: !todo.completed,
					  }
					: todo
			})
		default:
			return state
	}
}

export default todoReducer
