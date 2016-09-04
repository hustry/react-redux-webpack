
const initialState = {
	addedIds:[],
	quantityById:{}
}

export default function cart(state=initialState,action){
	return {
		addedIds:addedIds(state.addedIds,action),
		quantityById:quantityById(state.quantityById,action)
	}
}

function addedIds(state=initialState.addedIds,action){
	switch(action.type){
		case "ADD_TO_CART":
			if(state.indexOf(action.productId)!==-1){
				return state
			}
			return [...state,action.productId];
		default:
			return state;
	}
}

function quantityById(state = initialState.quantityById,action){
	switch(action.type){
		case "ADD_TO_CART":
			const {productId} = action;
			return Object.assign({},state,{
				[productId]:(state[productId]||0)+1
			})
	}
}

export function getQuantity(state,productId){
	return (state.quantityById[productId] || 0);
}

export function getAddedIds(state){
	return state.addedIds;
}