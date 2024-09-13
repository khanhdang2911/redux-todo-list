/** @format */
const initState = {
	search: '',
	status: 'All',
	priorities: [],
}

const filtersReducer = (state = initState, action) => {
	switch (action.type) {
		case 'filter/filterSearchChange':
			return {
				...state,
				search: action.payload,
			}
		case 'filter/filterStatusChange':
			return {
				...state,
				status: action.payload,
			}
		case 'filter/filterPriorityChange':
			return {
				...state,
				priorities: action.payload,
			}

		default:
			return state
	}
}

export default filtersReducer
