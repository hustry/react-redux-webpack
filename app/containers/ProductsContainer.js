
import React,{ Component } from "react";
import { connect } from "react-redux";
import ProductsList from "../components/ProductsList"
import ProductItem from "../components/ProductItem"
import {addToCart} from "../actions"


const mapStateToProps = function(state){

	return {
		products:[{
			id:1,
			title:"book1",
			price:500,
			inventory:100,
			quantity:200
		},
		{
			id:2,
			title:"book2",
			price:240,
			inventory:110
		}]	
	}

}

const mapDispatchToProps = function(dispatch){

	return {
		onClick:function(){
			
		}
	}
}

class ProductsConatiner extends React.Component{

	render(){

		const { products } = this.props;

		return (
		<ProductsList title="Products">
			{
				products.map(product=>{
					return (<ProductItem 
							 key = {product.id}
							 product = {product} 
							 onAddToCartClick = {()=>this.props.addToCart(product.id)}/>);
				})
			}		
		</ProductsList>)

	}

}

ProductsConatiner = connect(mapStateToProps,{ addToCart })(ProductsConatiner);

export default ProductsConatiner;