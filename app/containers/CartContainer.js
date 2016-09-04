import React from "react"
import { connect } from "react-redux"
import Cart from "../components/Cart"
import { getCartProducts } from "../reducers"


const mapStateToProps = function(state){

	return { 
		products:getCartProducts(state),
		total:100
	 };

}

const mapDispatchToProps = function(dispatch){
	return {
		onTodoClick:function(){

		}
	}
}

class CartContainer extends React.Component{
	render(){

		const { products,total } = this.props;
		return (
			<Cart
			 products = {products}
			 total = {total}
			 />
			);

	}
}

CartContainer = connect(mapStateToProps,mapDispatchToProps)(CartContainer);

export default CartContainer;