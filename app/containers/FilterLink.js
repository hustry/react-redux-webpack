
import React,{ Component } from "react";
import { connect } from "react-redux";
import Link from "../components/Link";
import { setFilter } from "../actions";


const mapStateToProps = function(state){

	return {
		filter:state.visibilityFilter
	}

}

const mapDispatchToProps = function(dispatch){

	return {
		onClick:function(filter){
			dispatch(setFilter(filter));
		}
	}
}

class FilterLink extends React.Component{

	render(){

		return (
		<p>
			<Link 
				active = { this.props.filter == 'SHOW_ALL' } 
				Click = { ()=> {this.props.onClick('SHOW_ALL')} }>Show All</Link>
			{'   '}
			<Link 
			    active = { this.props.filter == 'SHOW_COMPLETED' }
			    Click = { ()=> {this.props.onClick('SHOW_ACTIVE')} } >Show Active</Link>
			{'   '}			
		</p>)

	}

}

FilterLink = connect(mapStateToProps,mapDispatchToProps)(FilterLink);

export default FilterLink;