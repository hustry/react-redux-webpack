
import React, {Component} from "react";


export default class Link extends Component{

	render(){

		const { active, children, Click } = this.props;
		if(active){
			return (<span>{ children }</span>);
		}
		else{
			return (<span onClick = { Click }>{ children }</span>);
		}	

	}

}