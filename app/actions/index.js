

export const receiveProducts = function(){
	return {
		type:'RECEIVE_PRODUCTS'
	}
}



export const addToCart = function(productId){
	return (dispath,getState)=>{
		if(getState().products.byId[productId].inventory>0){
			dispath(addToCartUnsafe(productId));
		}
	}
}

const addToCartUnsafe = function(productId){
	return {
		type:'ADD_TO_CART',
		productId:productId
	}
}