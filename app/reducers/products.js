import { combineReducers } from 'redux'

function products(state,action){
	switch(action.type){
		case "ADD_TO_CART":
			return Object.assign({}, state, { inventory:state.inventory-1 });
		default:
			return state;
	}
}


function byId(state={},action){
	switch(action.type){
		case 'RECEIVE_PRODUCTS':
			return {
				1:{
					id:1,
					title:"book1",
					price:500,
					inventory:100
				},
				2:{
					id:2,
					title:"book2",
					price:240,
					inventory:110
				}
			}
		default:
			const { productId } = action;
			if(productId){
					return Object.assign({},state,{[productId]:products(state[productId],action)});						
			}
			return state;
	}
}

function visibleIds(state=[],action){
	switch(action.type){
		case "RECEIVE_PRODUCTS":
			return [1,2];
		default:
			return state;
	}
}

export default combineReducers({
	byId,
	visibleIds
})

export function getProduct(state,id){
	return state.byId[id];
}

export function getVisibleProducts(state){
	return state.visibleIds.map(id=>getProducts(id));
}