
import React from "react";
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapDispatchToProps = (dispatch)=>{
	return {
		onAddToDoClick:function (text) {
			dispatch(addTodo(text))
		}
	}
}

const mapStateToProps = (state)=>{
	return {

	};
}

class AddTodoComponent extends React.Component{

	handleAddTodo(e){
		e.preventDefault();
		if(!this.refs.todo.value.trim()){
			return
		}
		this.props.onAddToDoClick(this.refs.todo.value.trim());
	}

	render(){
		return (<div>
			<h1>Add toDo List</h1>
			<form>
				<input ref="todo" />
				<button onClick={this.handleAddTodo.bind(this)}> Add Todo </button>
			</form>
		</div>);		
	}

}

AddTodoComponent = connect(mapStateToProps,mapDispatchToProps)(AddTodoComponent);
export default AddTodoComponent;