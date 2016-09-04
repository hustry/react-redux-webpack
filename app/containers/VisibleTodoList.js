
import { connect } from "react-redux"
import { toggleTodo } from "../actions"
import TodoList from "../components/TodoList"


const mapStateToProps = function(state){

	let filteredTodos = null;
	let todos = state.todos.present;

	switch(state.visibilityFilter){

		case 'SHOW_ALL':
			filteredTodos =  todos;
			break;
		case 'SHOW_COMPLETED':
			filteredTodos = todos.filter(t=>t.completed);
			break;
		case 'SHOW_ACTIVE':
			filteredTodos = todos.filter(t=>!t.completed);
			break;
		default:
			filteredTodos = todos;
	}

	return { todos:filteredTodos };

}

const mapDispatchToProps = function(dispatch){
	return {
		onTodoClick:function(id){
			dispatch(toggleTodo(id));
		}
	}
}

const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibleTodoList;