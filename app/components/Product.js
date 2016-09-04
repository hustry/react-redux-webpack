
import React,{ Component } from "react"

export default class Product extends React.Component{

	render(){

		const { price, quantity, title} = this.props;

		return (
				<div>
					{title} - &#36;{price} {quantity?`${quantity}`:null}
				</div>
			);
	}

}