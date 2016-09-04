
import { combineReducers } from 'redux'
import cart,* as fromCart from "./cart"
import products,* as fromProducts from "./products"


const reducer = combineReducers({
	products,
	cart
});



export default reducer;

function getQuantity(state,id){
	return fromCart.getQuantity(state.cart,id);
}

function getProduct(state,id){
	return fromProducts.getProduct(state.products,id);
}

function getAddedIds(state){
	return fromCart.getAddedIds(state.cart);
}

export function getCartProducts(state){
	return getAddedIds(state).map(id=>{
		return Object.assign({},getProduct(state,id),{quantity:getQuantity(state, id)});
	});
}