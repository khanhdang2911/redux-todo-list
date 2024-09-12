/** @format */
import { createSelector } from 'reselect'
const getTodoSelector = (state) => state.todoList
const getFilterSearchSelector = (state) => state.filters.search
const getFilterStatusSelector = (state) => state.filters.status
const getFilterPrioritySelector = (state) => state.filters.priorities
const todoRemaningSelector = createSelector(
	getTodoSelector,
	getFilterSearchSelector,
	getFilterStatusSelector,
	getFilterPrioritySelector,
	(todoList, searchText, status, priorities) => {
		if (status === 'All') {
			return todoList.filter((todo) => {
				return todo.name.includes(searchText) && (priorities.length === 0 ? true : priorities.includes(todo.priority))
			})
		}
		return todoList.filter((todo) => {
      return (
				todo.name.includes(searchText) &&
				(status === 'Completed' ? true : false) === todo.completed &&
				(priorities.length === 0 ? true : priorities.includes(todo.priority))
			)
		})
	}
)

export { getTodoSelector, getFilterSearchSelector, getFilterStatusSelector, todoRemaningSelector }
