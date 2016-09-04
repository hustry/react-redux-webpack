
import React from 'react'
import { ActionCreators } from "redux-undo"
import { connect } from "react-redux"


const mapStateToProps = (state)=>{
	return {
		canUndo: state.todos.past.length>0,
		canRedo: state.todos.future.length>0
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		OnUndo:() => dispatch(ActionCreators.undo()),
		OnRedo:() => dispatch(ActionCreators.redo())
	}
}

class UndoRedo extends React.Component{

	render(){
		return (<p>
			<button disabled={!this.props.canUndo} onClick={this.props.OnUndo}>Undo</button>
			<button disabled={!this.props.canRedo} onClick={this.props.OnRedo}>Redo</button>
		</p>);
	}

} 

UndoRedo = connect(mapStateToProps,mapDispatchToProps)(UndoRedo);

export default UndoRedo