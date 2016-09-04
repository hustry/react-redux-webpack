
import React,{ PropTypes } from "react"
import Product from "./Product"

export default class ProductItem extends React.Component{

	render(){
		const { product }= this.props;
		return (
			<div style={{marginTop:20}}>
				<Product title={product.title} price={product.price} />
				<button onClick={this.props.onAddToCartClick} >{product.inventory>0 ? 'Add to cart' : 'Sold Out'}</button>
			</div>
		);
	}


}