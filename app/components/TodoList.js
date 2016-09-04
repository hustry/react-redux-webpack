
import React,{ PropTypes } from "react"
import Todo from "./Todo"

export default class TodoList extends React.Component{

	render(){
		const { todos, onTodoClick }= this.props;
		console.log("=================");
		console.log(todos);
		const todoList = todos.map((todo)=>{
			return (<Todo key = { todo.id } {...todo} Click = { ()=>onTodoClick(todo.id) } />);
		});	
		return (
			<ul>
				{ todoList}
			</ul>
		);
	}


}