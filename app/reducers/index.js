

export default function(state={},action){
	const {nodeId} = action;

	if(action.type == "DELETE_NODE"){
		const descendantIds = getAllDescendantIds(state,nodeId);
		return deleteMany(state,[nodeId,...descendantIds]);
	}

	return Object.assign({},state,{[nodeId]:node(state[nodeId],action)});
}

function getAllDescendantIds(state,nodeId){
	return state[nodeId].childIds.reduce((acc,childId)=>(
			[...acc,childId,...getAllDescendantIds(state,childId)]
		),[])
}

function deleteMany(state,ids){
	state = Object.assign({},state);
	ids.forEach(id=>delete state[id]);
	return state
}

function node(state,action){
	switch(action.type){
		case 'CREATE_NODE':
			return {
				id:action.nodeId,
				counter:0,
				childIds:[]
			}
		case 'INCREMENT':
			return Object.assign({},state,{counter:state.counter+1});
		case 'ADD_CHILD':
		case 'REMOVE_CHILD':
			return Object.assign({},state,{childIds:childIds(state.childIds,action)});
		default:
			return state;
	}
}

function childIds(state,action){
	switch(action.type){
		case 'ADD_CHILD':
			return [...state, action.childId];
		case 'REMOVE_CHILD':
			return state.filter((id)=>(id!==action.childId));
		default:
			return state;
	}
}