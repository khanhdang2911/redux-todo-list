/** @format */
import { combineReducers } from 'redux'
import filterReducer from '../components/Filters/filtersSlice'
import todoReducer from '../components/TodoList/todoListSlice'
const rootReducer = combineReducers({
	filters: filterReducer,
	todoList: todoReducer,
})

export default rootReducer
