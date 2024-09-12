/** @format */

const addToDo = (data) => {
	return {
		type: 'todoList/addToDo',
		payload: data,
	}
}
const checkedTodoCompleted = (data) => {
	return {
		type: 'todoList/checkedTodoCompleted',
		payload: data,
	}
}
const filterSearchChange = (data) => {
	return {
		type: 'filter/filterSearchChange',
		payload: data,
	}
}

const filterStatusChange = (data) => {
	return {
		type: 'filter/filterStatusChange',
		payload: data,
	}
}

const filterPriotityChange = (data) => {
	return {
		type: 'filter/filterPriorityChange',
		payload: data,
	}
}
export { addToDo, checkedTodoCompleted, filterSearchChange, filterStatusChange, filterPriotityChange }
