/** @format */
// const initState = {
// 	search: '',
// 	status: 'All',
// 	priorities: [],
// }

// const filtersReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case 'filter/filterSearchChange':
// 			return {
// 				...state,
// 				search: action.payload,
// 			}
// 		case 'filter/filterStatusChange':
// 			return {
// 				...state,
// 				status: action.payload,
// 			}
// 		case 'filter/filterPriorityChange':
// 			return {
// 				...state,
// 				priorities: action.payload,
// 			}

// 		default:
// 			return state
// 	}
// }

// export default filtersReducer

import { createSlice } from '@reduxjs/toolkit'
const filtersSlice = createSlice({
	name: 'filters',
	initialState: {
		search: '',
		status: 'All',
		priorities: [],
	},
	reducers: {
		filterSearchChange: (state, action) => {
			state.search = action.payload
		},
		filterStatusChange: (state, action) => {
			state.status = action.payload
		},
		filterPriorityChange: (state, action) => {
			state.priorities = action.payload
		},
	},
})

export default filtersSlice
