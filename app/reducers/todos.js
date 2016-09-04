
import undoable, { distinctState } from "redux-undo"

const todo = function(state={}, action){
	switch(action.type){
		case "ADD_TODO":
			return {
				id:action.id,
				text:action.text,
				completed:false
			};
		case "TOGGLE_TODO":
			if(state.id !== action.id){
				return state;
			}
			return Object.assign({},state,{completed:!state.completed});
		default:
			return state;
	}

}

const todos = function (state=[],action) {	
	console.info(action.type);
	console.log(action);
	switch(action.type){
		case 'ADD_TODO':
			return [...state,todo(undefined,action)];
		case 'TOGGLE_TODO':
			let xx = state.map(t=>{
				return todo(t,action)
			});
			return xx;
		default:
			return state;
	}
}

const undoableTodos = undoable(todos,{
	filter: distinctState()
})

export default undoableTodos;