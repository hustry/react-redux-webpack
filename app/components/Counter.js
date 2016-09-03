
import React, {Component, PropTypes} from "react";

export default class Counter extends Component{

	constructor(props){
		super(props);
	}


	render(){

		const { value,onIncrement,onDecrement } = this.props;
		return (
			<div>
				<h1>This is Basic version for redux!</h1>
				<p>
					Clicked:{ value } times
					{'  '}
					<button onClick={ onIncrement }>+</button>
					{'  '}
					<button onClick={ onDecrement }>-</button>
				</p>
			</div>
			);
	}

}