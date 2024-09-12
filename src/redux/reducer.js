/** @format */
const initState = {
	filters: {
		search: '',
		status: 'All',
		priorities: [],
	},
	todoList: [
		{ id: 1, name: 'Learn React', priority: 'High', completed: false },
		{ id: 2, name: 'Learn Redux', priority: 'Medium', completed: true },
		{ id: 3, name: 'Learn JavaScript', priority: 'Low', completed: false },
	],
}
const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'todoList/addToDo':
			return {
				...state,
				todoList: [...state.todoList, action.payload],
			}
		case 'filter/filterSearchChange':
			return {
				...state,
				filters: {
					...state.filters,
					search: action.payload,
				},
			}
		case 'filter/filterStatusChange':
			return {
				...state,
				filters: {
					...state.filters,
					status: action.payload,
				},
			}
		case 'filter/filterPriorityChange':
			return {
				...state,
				filters: {
					...state.filters,
					priorities: action.payload,
				},
			}
		case 'todoList/checkedTodoCompleted':
			return {
				...state,
				todoList: [...state.todoList].map((todo) => {
					return todo.id === action.payload
						? {
								...todo,
								completed: !todo.completed,
						  }
						: todo
				}),
			}
		default:
			return state
	}
}

export default rootReducer
