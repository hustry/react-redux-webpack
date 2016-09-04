
import React,{ PropTypes } from "react"


export default class ProductsList extends React.Component{

	render(){
		const { title, children }= this.props;
		return (
			<div>
				<h3>{ title }</h3>
				<div>{ children }</div>
			</div>
		);
	}


}