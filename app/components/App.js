
import React from 'react'
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"
import FilterLink from "../containers/FilterLink"


export default class App extends React.Component{

	render(){
		return (<div>
					<AddTodo />
					<VisibleTodoList />
					<FilterLink />
				</div>);
	}
}