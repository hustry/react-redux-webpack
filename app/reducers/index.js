
import { combineReducers } from "redux";

function selectedReddit(state='reactjs',action){
	switch(action.type){
		case "SELECT_REDDIT":
			return action.reddit;
		default:
			return state;
	}
}

function posts(state={
	isFetching:false,
	didInvidate:false,
	items:[]
},action){

	switch(action.type){
		case "INVALIDATE_REDDIT":
			return Object.assign({},state,{didInvidate:true});
		case "REQUEST_POSTS":
			return Object.assign({},state,{isFetching:true,didInvidate:false})
		case "RECEIVE_POSTS":
			return Object.assign({},state,
									{
										isFetching:false,
										didInvidate:false,
										items:action.posts,
										lastUpdated:action.receivedAt
									});
		default:
			return state;
	}

}

function postsByReddit(state={},action){
	switch(action.type){
		case "INVALIDATE_REDDIT":
		case "RECEIVE_POSTS":
		case "REQUEST_POSTS":
			return Object.assign({},
					state,
					{[action.reddit]:posts(state[action.reddit],action)})
		default:
			return state;
		}		
}

const rootReducer = combineReducers({
	postsByReddit,
	selectedReddit
});

export default rootReducer;