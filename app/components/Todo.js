
import React,{ Component } from "react"

export default class Todo extends React.Component{

	render(){

		const textline = {
			textDecoration:this.props.completed ? 'line-through':'none'
		};

		return (
				<li onClick = { this.props.Click } 
					style = { textline } >
					{ this.props.text }
				</li>
			);
	}

}