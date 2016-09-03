
let nextTodoId = 0;


export const addTodo = function(text){
	return {
		type:'ADD_TODO',
		id:nextTodoId++,
		text:text
	}
}

export const toggleTodo = function(id){
	return {
		type:'TOGGLE_TODO',
		id:id
	}
}

export const setFilter = function(filter){
	return {
		type:'SET_VISIBILITY_FILTER',
		filter:filter
	}
}